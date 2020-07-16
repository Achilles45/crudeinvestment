<template>
  <div class="signup">
        <div class="form__wrapper">
           <h4 class="text-center">Create an Account</h4>
           <P class="text-center">It is simple and can be completed in a minute!</P>
           <hr>
           <form @submit.prevent="signup()">
               <div class="form-group">
                   <input type="text" class="form-control" placeholder="Username" v-model="name">
               </div>
                <div class="form-group">
                   <input type="email" class="form-control" placeholder="Enter your email address" v-model="email">
               </div>
                <div class="form-group">
                   <input type="tel" class="form-control" placeholder="Phone Number" v-model="phone">
               </div>
               <div class="form-group">
                      <small id="passwordHelpBlock" class="form-text text-muted">Select your account type</small>
                  <select class="form-control" id="inlineFormCustomSelect" v-model="account_type">
                            <option value="10,000">&#8358;10,000 to &#8358;14,000</option>
                            <option value="20,000">&#8358;20,000 to &#8358;28,000</option>
                            <option value="30,000">&#8358;30,000 to &#8358;45,000</option>
                            <option value="40,000">&#8358;40,000 to &#8358;56,000</option>
                            <option value="50,000">&#8358;50,000 to &#8358;70,000</option>
                            <option value="100,000">&#8358;100,000 to &#8358;140,000</option>
                            <option value="100,000">&#8358;100,000 to &#8358;140,000</option>
                            <option value="200,000">&#8358;200,000 to &#8358;280,000</option> 
                            <option value="400,000">&#8358;400,000 to &#8358;560,000</option> 
                            <option value="500,000">&#8358;500,000 to &#8358;700,000</option> 
                            <option value="100,000 promo">&#8358;100,000 to &#8358;200,000 (Promo plan)</option>
                            <option value="200,000 promo">&#8358;200,000 to &#8358;400,000 (Promo plan)</option>
                            <option value="300,000 promo">&#8358;300,000 to &#8358;600,000 (Promo plan)</option>
                            <option value="400,000 promo">&#8358;400,000 to &#8358;800,000 (Promo plan)</option>
                            <option value="500,000 promo">&#8358;500,000 to &#8358;1,000,000 (Promo plan)</option>
                            <option value="500,000 jackpot">&#8358;500,000 to &#8358;1,500,000 (gold jackpot)</option>
                            <option value="1,000,000 jackpot">&#8358;1,000,000 to &#8358;3,000,000 (gold jackpot)</option>
                            <option value="2,000,000 jackpot">&#8358;2,000,000 to &#8358;6,000,000 (gold jackpot)</option>
                            <option value="5,000,000 jackpot">&#8358;5,000,000 to &#8358;15,000,000 (gold jackpot)</option>
                            <option value="50 btb">$50 to $70 (btc option)</option>
                            <option value="$60 btb">$60 to $84 (btc option)</option>
                            <option value="$70 btb">$70 to $98 (btc option)</option>
                            <option value="$80 btb">$80 to $112 (btc option)</option>
                            <option value="$90 btb">$90 to $126 (btc option)</option>
                            <option value="$100 btb">$100 to $140 (btc option)</option>
                            <option value="$200 btb">$200 to $280 (btc option)</option>
                            <option value="$300 btb">$300 to $420 (btc option)</option>
                            <option value="$400 btb">$400 to $560 (btc option)</option>
                            <option value="$5000 btb">$5000 to $7000 (btc option)</option>
                            <option value="$200 btb">$200 to $400 (promo btc)</option>
                            <option value="$300 btb">$300 to $600 (promo btc)</option>
                            <option value="$400 btb">$400 to $800 (promo btc)</option>
                            <option value="$500 btb">$500 to $1000 (promo btc)</option>
                            <option value="$600 btb">$600 to $1200 (promo btc)</option>
                            <option value="$700 btb">$700 to $1400 (promo btc)</option>
                         </select>
               </div>
               <div class="form-group">
                    <small id="passwordHelpBlock" class="form-text text-muted">Select your Bank</small>
                   <select class="form-control " id="bank" v-model="user_bank">
<option selected>Choose</option>
<option value="access">Access Bank</option>
          <option value="Citibank">Citibank</option>
          <option value="Diamond">Diamond Bank</option>
          <option value="Ecobank">Ecobank</option>
          <option value="Fidelity">Fidelity Bank</option>
          <option value="Firstbank">First Bank</option>
          <option value="Fcmb">First City Monument Bank (FCMB)</option>
          <option value="Gtb">Guaranty Trust Bank (GTB)</option>
          <option value="Heritage">Heritage Bank</option>
          <option value="Keystone">Keystone Bank</option>
          <option value="Polaris">Polaris Bank</option>
          <option value="Providus">Providus Bank</option>
          <option value="Stanbic">Stanbic IBTC Bank</option>
          <option value="Standard">Standard Chartered Bank</option>
          <option value="Sterling">Sterling Bank</option>
          <option value="Suntrust">Suntrust Bank</option>
          <option value="Union">Union Bank</option>
          <option value="Uba">United Bank for Africa (UBA)</option>
          <option value="Unity">Unity Bank</option>
          <option value="Wema">Wema Bank</option>
          <option value="Zenith">Zenith Bank</option>
</select>
               </div>
               <div class="form-group">
                   <input type="text" class="form-control" placeholder="Account Number" v-model="user_account_number">
               </div>
               <div class="form-group">
                   <input type="text" class="form-control" placeholder="Account Name" v-model="user_bank_name">
               </div>
               <div class="form-group">
                   <input type="password" class="form-control" placeholder="Enter Password" v-model="password">
               </div>
                <div class="form-group">
                   <input type="password" class="form-control" placeholder="Repeat Password" v-model="repeat_password">
               </div>
                 <div v-if="err" class="alert alert-danger animated slideInRight">
                   {{ err }}
               </div>
                <div v-if="loading" class="loading text-center">
                              <img src="../assets/images/loader.gif" class="loader" alt="">
                          </div>
               <button type="submit" class="signup__btn">Create Account</button>
               <div class="bottom text-center pt-4">
                   <p>Have an account already? <router-link to="/signin">Sign In</router-link></p>
               </div>
           </form>
        </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    data(){
        return{
            name: null,
            email: null,
            phone: null, 
            account_type:null,
            password: null,
            repeat_password: null,
            err: null,
            loading:false,
            available_balance:null,
            verifified: 'false',
            user_bank:null,
            user_account_number:null,
            user_bank_name:null
        }
    },
    methods:{
        signup(){
            this.loading = true
            //Check if the user has filled out all the required details
            if(!this.name || !this.email || !this.phone || !this.account_type || !this.user_bank || !this.user_account_number || !this.user_bank_name || !this.password || !this.repeat_password){
                this.loading = false
                this.err = 'Registration failed. Please fill out the form and try again!'
            }else if (this.password != this.repeat_password){
                //Check to see if the passwords are same
                this.loading = false
                this.err = 'Oops! Your password did not match'
            }else{
                //Signup the user
                this.loading = false
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((cred)=>{
                     db.collection('users').add({
                        name:this.name,
                        phone:this.phone,
                        email:this.email,
                        account_type:this.account_type,
                        user_id:cred.user.uid,
                        available_balance:'0',
                        verifyuser:'false',
                        bank_name: '',
                        account_number:'',
                        account_name:'',
                        wallet_address:'',
                        user_bank:this.user_bank,
                        user_bank_name:this.user_bank_name,
                        user_account_number:this.user_account_number

                })
                this.$router.push({name: 'dashboard'})
                })
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.signup{
    background: $primary-color;
    // height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .form__wrapper{
        background: #fff;
        border-radius: 4px;
        padding: 2rem;
        margin: 4rem 1rem;
         width: 500px;
         max-width: 100%;
         h4{
                font-weight: bold;
                color: #000;
                padding-top: 1rem;
                text-transform: uppercase;
            }
            p{
                padding-bottom: 1rem;
                color: #627081;
                font-size: .9rem;
            }
        form{
            input, select{
                height: 3.2rem;
                border-radius: 0px;
                box-shadow: none;
                // border:1px solid #000;
                &::placeholder{
                    text-transform: uppercase;
                    font-size: .7rem;
                    color: #627081;
                }
                 .small{
                color: #000 !important;
                font-weight: bold !important;
            }
            }
             .loader{
                // max-width: 250px;
                height: 100px;
            }
            .signup__btn{
                background: $secondary-color;
                color: #fff;
                padding: .8rem 2rem;
                border: 1px solid $secondary-color;
                width: 100%;
                border-radius: 4px;
            }
        }
    }
}
</style>