import { namespaceWrapper } from '@_koii/namespace-wrapper';

export async function submission(roundNumber: number): Promise<string | void> {
  /**
   * Submit the task proofs for auditing
   * Must return a string of max 512 bytes to be submitted on-chain
   */
  try {
    console.log(`MAKE SUBMISSION FOR ROUND ${roundNumber}`);

    // Retrieve the stored CIDs from the namespace
    const storedCIDs = await namespaceWrapper.storeGet('hostedCIDs');
    if (!storedCIDs) {
      console.error('No CIDs found in namespace for submission.');
      return '';
    }

    console.log('Submitting stored CIDs:', storedCIDs);

    // Return the stored CIDs as a comma-separated string
    return storedCIDs;
  } catch (error) {
    console.error('MAKE SUBMISSION ERROR:', error);
  }
}
