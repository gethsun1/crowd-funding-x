import { namespaceWrapper } from "@_koii/namespace-wrapper";
import { create } from 'ipfs-http-client';

export async function audit(
  submission: string,
  roundNumber: number,
  submitterKey: string,
): Promise<boolean> {
  /**
   * Audit a submission
   * This function should return true if the submission is correct, false otherwise
   */
  console.log(`AUDIT SUBMISSION FOR ROUND ${roundNumber} from ${submitterKey}`);

  try {
    // Retrieve the stored CIDs from the namespace
    const storedCIDs = await namespaceWrapper.storeGet('hostedCIDs');
    if (!storedCIDs) {
      console.error("No CIDs found in namespace for verification.");
      return false;
    }

    const parsedStoredCIDs = JSON.parse(storedCIDs);

    // Parse the submitted data into an array
    const submittedCIDs = submission.split(',');

    // Verify that all submitted CIDs match the stored CIDs
    if (submittedCIDs.length !== parsedStoredCIDs.length) {
      console.warn("Mismatch in the number of CIDs.");
      return false;
    }

    for (const cid of submittedCIDs) {
      if (!parsedStoredCIDs.includes(cid)) {
        console.warn(`CID mismatch: ${cid} not found in stored CIDs.`);
        return false;
      }
    }

    // Optionally verify CIDs on IPFS (content availability check)
    const ipfs = create({ url: "https://ipfs.infura.io:5001/api/v0" });
    for (const cid of submittedCIDs) {
      try {
        const content = await ipfs.cat(cid);
        if (!content) {
          console.warn(`Content not available for CID: ${cid}`);
          return false;
        }
        console.log(`Verified content availability for CID: ${cid}`);
      } catch (error) {
        console.error(`Error verifying CID: ${cid}`, error);
        return false;
      }
    }

    console.log("All CIDs verified successfully.");
    return true;
  } catch (error) {
    console.error("AUDIT ERROR:", error);
    return false;
  }
}
