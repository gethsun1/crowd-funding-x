import { namespaceWrapper } from "@_koii/namespace-wrapper";
import { create, globSource } from 'ipfs-http-client';

export async function task(roundNumber: number): Promise<void> {
  try {
    console.log(`EXECUTE TASK FOR ROUND ${roundNumber}`);

    // Initialize IPFS client
    const ipfs = create({ url: "https://ipfs.infura.io:5001/api/v0" });

    // Define the file or folder to be hosted
    const contentPath = "./build"; // Replace with your file/folder path

    const cids = [];
    for await (const file of ipfs.addAll(globSource(contentPath, '**/*'))) {
      cids.push(file.cid.toString());
    }

    // Store all CIDs in the namespace as an array
    await namespaceWrapper.storeSet('hostedCIDs', JSON.stringify(cids));
    console.log("Stored CIDs in namespace:", cids);

    // Verify each file individually
    for (const cid of cids) {
      try {
        const verifyContent = await ipfs.cat(cid);
        if (verifyContent) {
          console.log(`Verified content for CID: ${cid}`);
        } else {
          console.warn(`Content verification failed for CID: ${cid}`);
        }
      } catch (error) {
        console.error(`Error verifying CID: ${cid}`, error);
      }
    }
  } catch (error) {
    console.error("EXECUTE TASK ERROR:", error);
  }
}
