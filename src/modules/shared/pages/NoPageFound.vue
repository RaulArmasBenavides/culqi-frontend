<template>
    <div class="not-found">
      <div class="content">
        <h1>404</h1>
        <p>Página no encontrada</p>
        <a href="/" class="go-home">Regresar al inicio</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  
  <style scoped>
  .not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f7fa;
    font-family: 'Arial', sans-serif;
  }
  
  .content {
    text-align: center;
    border: 1px solid #dce1e8;
    padding: 50px;
    background-color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 6em;
    color: #4a5568;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.5em;
    color: #4a5568;
    margin-bottom: 20px;
  }
  
  .go-home {
    display: inline-block;
    padding: 10px 20px;
    background-color: #2c3e50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .go-home:hover {
    background-color: #34495e;
  }
  </style>
  