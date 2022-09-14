# Litmus 🔥

## NEARCON IRL HACKATHON 2022 Submission

Litmus is a decentralized voting platform for the issuance of on-chain experience and credentials. Currently there is no wasy way to prove that you are knowledgeable in a specific field unless you show a certification or diploma. And thers is no simple way to check if these certificates are correct. Additionally, traditional forms of certification and issuance of degres are expensive, centralized, and tend to focus on standardized testing which is not indicative of real world experience.

## How Does It Work

Users can now attain on chain credentials through decentralized voting groups. This leads to more accurate assesment of skills, more opportunities avaiable, and encourages the web3 ethos of decentralization.

Users login with their Near wallet, create an online portfolio/resume, then submit their resume (~2 NEAR) to a panel of certified judges that vote on whether they believe the candiate's skills are accurate.

Judges do not know each other, and they are incentivized to vote by rewarding them with NEAR. Judges are penalized if they abstain from voting too often or vote again st the majority over a period of time.

## How we built it
We built it together from user research through sending a survey to the NEARCON telegram group. We then interviewed individuals to ask their experiences in this area. We then made paper prototypes to test out our solutions and see how our audience reacts. We adjusted accordingly, iterated and 

## Challenges we ran into
We spent a lot of time trying to pin down the problem amongst all the problems there are in education. Making full use of every minute whilst trying to network was hard. We talked to a lot of mentors and participants at the hackathon to get their feedback to gather solutions. 
making smart contracts; finding the punchline of the pitch deck, putting a name to the solution. 

For the NEAR JS SDK Documentation a lot of functions were not up to date making it difficult to figure out how to connect with the database.

## Accomplishments that we're proud of
Putting the team together on the first day of the hackathon! We met because of our open mic pitch. It's the dream team! We love working together and we have built a small community of women at NEAR through this team. 

## What We Learned

We have learnt that we need to spend more time of the solution making, and start figuring out and pinning down the problems earlier. We learnt that there's a huge community there they can help us when we can start in coding - such as writing the smart contracts. The developer learnt how to use the NEAR JS SDK and Pagoda.

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
