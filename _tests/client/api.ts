import { OctopusApiClient } from '../../package/lib';

export const apiClient = new OctopusApiClient(
  process.env.OCTOPUS_API_KEY || ''
);
