<template>
    <div class="token-form-container">
      <form @submit.prevent="fetchCardData">
        <label for="token">Token:</label>
        <input type="text" v-model="token" id="token" placeholder="Introduce el token">
        <button type="submit">Obtener Datos</button>
      </form>
  
      <div v-if="cardData" class="card-data">
        <div class="card-info">
          <p>Email: {{ cardData.email }}</p>
          <p>Número de tarjeta: {{ cardData.card_number }}</p>
          <p>Mes de expiración: {{ cardData.expiration_month }}</p>
          <p>Fecha de expiración: {{ cardData.expiration_date }}</p>
        </div>
        <img src="../../../assets/card.png" alt="Imagen de tarjeta Visa débito" class="card-image">
      </div>
    </div>
  </template>
  
  <script>
  import {getCardInfoByToken} from '../services/CardService'
  export default {
    name: 'TokenForm',
    data() {
      return {
        token: '',
        cardData: null
      };
    },
    methods: {
      async fetchCardData() {
        this.cardData = await getCardInfoByToken(this.token);
      }
    }
  }
  </script>
  
  <style scoped>
  .token-form-container {
    font-family: 'Arial', sans-serif;
    width: 400px;
    margin: auto;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
  
  .card-data {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .card-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .card-image {
    width: 80px;
    height: auto;
  }
  </style>