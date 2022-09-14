<template>
<div id="login-container">
    <button
                    class="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-black rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
                    @click="signIn()"
                    >Login with NEAR
    </button>
</div>
</template>

<script>
export default {
name: 'NearLogin',
data() {
    return {
    modalOpen: false,
    isLoggedIn: false,
    }
},
async mounted() {
    console.log(this.$near)
    this.isLoggedIn = this.$near.wallet.isSignedIn()
},
methods: {
    async signIn() {
        if (this.$near.wallet.isSignedIn()) {
            this.$router.push('resume')
        } else {
            // TODO - make this an .env variable
            await this.$near.wallet.requestSignIn({ contractId: 'dev-1663093630511-23092692064929' })
            this.$router.push('resume')
             
        }
    },
},
}
</script>

<style></style>
  