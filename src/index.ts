import { createLogger, setDefaultLoggerLevel } from '@rocketmakers/shell-commands/lib/logger';
import { LoggerLevel } from '@rocketmakers/log';
import { Args } from '@rocketmakers/shell-commands/lib/args';
import { Shell } from '@rocketmakers/shell-commands/lib/shell';
import { FileSystem } from '@rocketmakers/shell-commands/lib/fs';
import { resolve } from 'path';
import { copyFilesAsync, getFileExtension, removeDirectoryAsync } from './helpers';

(async () => {
  const args = await Args.match({
    log: Args.single({
      description: 'The log level',
      shortName: 'l',
      defaultValue: 'info',
      validValues: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
    }),
  });
  if (!args) {
    process.exit(-1);
  }
  setDefaultLoggerLevel(args.log as LoggerLevel);
  const logger = createLogger('Octopus Energy Api Client Generator');

  const tmpOutputPath = resolve(__dirname, './tmp/octopus');

  const swaggerPath = resolve(
    __dirname,
    '..',
    'openapi.json'
  );
  const outputPath = resolve(__dirname, '..', 'package', 'src', 'octopus');

  try {
    await FileSystem.makeDirectory(tmpOutputPath, { recursive: true });

    await Shell.exec('npx', [
      '@openapitools/openapi-generator-cli',
      'generate',
      '--generator-name',
      'typescript-axios',
      '--additional-properties',
      'supportsES6=true',
      '--additional-properties',
      'withInterfaces=true',
      '--input-spec',
      swaggerPath,
      '--output',
      tmpOutputPath,
    ]);

    const files = await FileSystem.getFiles(tmpOutputPath);
    const filteredFiles = files.filter(x => getFileExtension(x.name) === 'ts');

    for (const file of filteredFiles) {
      await copyFilesAsync(file.path, `${outputPath}/${file.name}`);
    }

    for (const file of files) {
      await FileSystem.unlinkAsync(file.path);
    }

    // Fix for the Api Generator creating deletes
    const apiFile = await FileSystem.readFileAsync(`${outputPath}/api.ts`, { encoding: 'utf8' });
    const apiFileContent = apiFile.toString();
    const newApiFileContent = apiFileContent.replace(/(delete localVarUrlObj.search;)/g, 'localVarUrlObj.search = null;');
    await FileSystem.writeFileAsync(`${outputPath}/api.ts`, newApiFileContent);

    await FileSystem.unlinkAsync(resolve(tmpOutputPath, '.openapi-generator', 'VERSION'));
    await removeDirectoryAsync(resolve(tmpOutputPath, '.openapi-generator'));
    await removeDirectoryAsync(tmpOutputPath);
    logger.info('Generated Octopus Energy Api Client');
  } catch (error) {
    logger.error(error);
    process.exit(-1);
  }
})();
