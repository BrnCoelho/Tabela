
async function fetchUsers() {//  buscar dados da API e preencher a tabela
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');//  requisição HTTP para a API e aguarda a resposta
    const users = await response.json();// converte a  resposta em json e guarda(await) o result
    const tableBody = document.querySelector('#userTable tbody');// elemento <tbody> da tabela para inserir os dados
    tableBody.innerHTML = '';// remove a mensagem de load


    users.forEach(user => {// Itera sobre o array de usuários retornado pela API
      const row = document.createElement('tr');// cria um novo elemnto <tr> para cada usuario
      // endereço completo do usuário como uma string
      const address = `${user.address.street}, ${user.address.suite}, 
                         ${user.address.city}, ${user.address.zipcode}`;

      // Formata as coordenadas geográficas (latitude e longitude)
      const coordinates = `Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`;


      const company = `${user.company.name} - ${user.company.catchPhrase}`;// Formata as informações da empresa (nome e slogan)

      // preechendo cada linha da tabela
      row.innerHTML = ` 
          <td>` + user.id + `</td>         <!-- ID do usuário -->
            <td>` + user.name + `</td>       <!-- Nome completo do usuário -->
            <td>` + user.username + `</td>   <!-- Nome de usuário (username) -->
            <td>` + user.email + `</td>      <!-- Email do usuário -->
            <td>` + user.phone + `</td>      <!-- Telefone do usuário -->
            <td>` + user.website + `</td>    <!-- Website do usuário -->
            <td>` + user.address.street + ", " + user.address.suite + ", " + user.address.city + ", " + user.address.zipcode + `</td> <!-- Endereço completo -->
            <td>` + "Lat: " + user.address.geo.lat + ", Lng: " + user.address.geo.lng + `</td> <!-- Coordenadas geográficas -->
            <td>` + user.company.name + " - " + user.company.catchPhrase + `</td>         <!-- Nome e slogan da empresa -->
          `;

      
      tableBody.appendChild(row);// repitindo o processo ate a tabela ser preenchida
    });

  } catch (error) {
    // exibe a mensagem de erro no console 
    console.error('Erro ao buscar usuários:', error);

    // se a api falhar
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '<tr><td colspan="9">Erro ao carregar dados.</td></tr>';
  }
}
fetchUsers();
