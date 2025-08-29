<template>
    <div class="payment-gateway">
        <div class="form-container">
            <h2>Ingresar los datos de la tarjeta</h2>
            <h5>Por favor ingrese los datos de la tarjeta de débito o crédito</h5>
            <form @submit.prevent="postData" method="post">
                <input type="text" name="card_number" placeholder="Número de tarjeta" v-model="card.card_number">
                <input type="text" name="email" placeholder="Email" v-model="card.email">
                <input type="text" name="cvv" placeholder="CVV" v-model="card.cvv">
                <div class="expiration">
                    <input type="text" name="expiration_year" placeholder="Año de expiración" v-model="card.expiration_year">
                    <input type="text" name="expiration_month" placeholder="Mes de expiración" v-model="card.expiration_month">
                </div>
                <button type="submit">Pagar</button>
            </form>
        </div>
        <div v-if="token && !this.showError" class="token-response">
            <h3>Respuesta del API (Token)</h3>
            <textarea readonly v-model="token"></textarea>

        </div>

        <div v-if="this.showError">
       <p>{{this.showError}}</p>
      </div>
    </div>
</template>

<script>
  import {createToken} from '../services/CardService'
export default {
    name: "createToken",
    data() {
        return {
            card: {
                card_number: null,
                email: null,
                cvv: null,
                expiration_year: null,
                expiration_month: null
            },
            token: ''
        }
    },
    methods: {
        async postData() {
          this.token = await createToken(this.card);

          if(this.token.error !=null){
          this.showError = this.token.error;
        }else{
          this.showError =null;
        }
        }
    }
}
</script>

<style scoped>
.payment-gateway {
    font-family: 'Arial', sans-serif;
    width: 400px;
    margin: auto;
    background-color: #f4f5f7;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.form-container {
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    width: 95%;  
}

button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #2980b9;
}

.expiration {
    display: flex;
    gap: 10px;
}
 
.token-response {
    margin-top: 20px;
}

textarea {
    width: 100%;
    min-height: 60px;
    resize: none;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
}
</style>
