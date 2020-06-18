## Desenvolvimento Mobile - Exercício Prático 4 - Ionic - UniBH 2020/1 - Prof. Ramon
Pereira.
Vamos trabalhar com um CRUDE realizando armazenamento com Firebase e com
Ionic Storage
### 1) Crie um projeto utilizando o template sidemenu (ionic start Exercicio4 sidemenu)
### 2) Instale as dependências necessárias:
a) npm install @ionic/storage
b) npm install firebase @angular/fire --save
c) Importar no app.module: AngularFireModule, AngularFireAuthModule
d) Adicionar no providers AngularFireModule,AngularFireAuth, AuthGuard
e) Configure o enviroments com as variáveis do Firebase.
### 3) Crie uma página login
No template:
a) crie o formulário de login solicitando login e senha
No serviço:
b) crie os métodos de autenticação conforme visto em sala de aula (Login e
Registrar) ambos com e-mail.
c) Ao terminar de logar você deverá redirecionar o usuário para uma página
chamada sintomas de saúde.
### 4) Crie uma página chamado sintomas-saude
### 5) Crie uma página chamado editar-sintomas
### 6) Crie um serviço de crude chamado saude
### 7) Crie um serviço chamado sintomas-saude
### 8) Crie um model com a classe Sintoma com os campos data, descrição, intensidade.
### 9) Crie um model com a classe ListaSintomas que irá receber a chave do storage e um
objeto do tipo Sintomas.
### 10) No CRUDE crie os métodos inserir, deletar, atualizar, get, getAll conforme visto em
sala de aula.
### 11) Na página sintomas-saude,
No Template:
a) Utilize os componentes do ionic para criar uma lista de sintomas de saúde,
adicione um float button para permitir inserir um novo sintoma.
No typescript:
b) Adicione os métodos e variáveis para listar os sintomas no binding e para
adicionar um novo sintoma de saúde.
### 12) Na página editar-saude,
No Template:
a) Crie um formulário para inserir um sintoma, não esqueça de utilizar o
ngModel;
No Typescript:
b) Crie uma função para inserir/editar um sintoma.
Não esqueça dos imports dos routers, serviços e models.