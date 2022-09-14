# decredify

## NEARCON 2022 Project

ED3 is a decentralized voting platform for the issuance of on-chain experience and credentials. Currently there is no wasy way to prove that you are knowledgeable in a specific field unless you show a certification or diploma. And thers is no simple way to check if these certificates are correct. Additionally, traditional forms of certification and issuance of degres are expensive, centralized, and tend to focus on standardized testing which is not indicative of real world experience.

## How Does It Work

Users can now attain on chain credentials through decentralized voting groups. This leads to more accurate assesment of skills, more opportunities avaiable, and encourages the web3 ethos of decentralization.

Users login with their Near wallet, create an online portfolio/resume, then submit their resume (~2 NEAR) to a panel of certified judges that vote on whether they believe the candiate's skills are accurate.

Judges do not know each other, and they are incentivized to vote by rewarding them with NEAR. Judges are penalized if they abstain from voting too often or vote again st the majority over a period of time.

## Technologies Used

-NEAR Protocol Testnet
-Pagoda JS SDK for NEAR
-Vue.js+Nuxt+Tailwind CSS

## Build
```
# Frontend
cd dapp

yarn

yarn run dev

# Deploy contract
cd contract

yarn run build

yarn run deploy
```
