export async function addToQueue(wallet) {
    console.log("Inside add to queue function");
    console.log(wallet);
    return await wallet.callMethod({
        contractId: "dev-1663093630511-23092692064929",
        method: 'add_applicant_to_queue', 
    }
    );
}

export async function nftMint(wallet, name, base_uri){
    const metadata = {
        spec: "nft-1.0.0",
        symbol: "ED3",
        name: "NEAR Certified Hacker",
        base_uri: "ipfs://bafybeigun7xhf6xabophfvr3ubxdx6xtryajfcakydbakdiyafjoymjy5q",
    }
    return await wallet.callMethod({
        contractId: "dev-1663093630511-23092692064929",
        method: 'nft_mint', 
        args:{
            metadata: JSON.stringify(metadata),
            receiver_id: wallet.getAccountId(), 
        }}
    );
}
