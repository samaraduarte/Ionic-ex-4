## Desenvolvimento Mobile - Exerc�cio Pr�tico 4 - Ionic - UniBH 2020/1 - Prof. Ramon
Pereira.
Vamos trabalhar com um CRUDE realizando armazenamento com Firebase e com
Ionic Storage
### 1) Crie um projeto utilizando o template sidemenu (ionic start Exercicio4 sidemenu)
### 2) Instale as depend�ncias necess�rias:
a) npm install @ionic/storage
b) npm install firebase @angular/fire --save
c) Importar no app.module: AngularFireModule, AngularFireAuthModule
d) Adicionar no providers AngularFireModule,AngularFireAuth, AuthGuard
e) Configure o enviroments com as vari�veis do Firebase.
### 3) Crie uma p�gina login
No template:
a) crie o formul�rio de login solicitando login e senha
No servi�o:
b) crie os m�todos de autentica��o conforme visto em sala de aula (Login e
Registrar) ambos com e-mail.
c) Ao terminar de logar voc� dever� redirecionar o usu�rio para uma p�gina
chamada sintomas de sa�de.
### 4) Crie uma p�gina chamado sintomas-saude
### 5) Crie uma p�gina chamado editar-sintomas
### 6) Crie um servi�o de crude chamado saude
### 7) Crie um servi�o chamado sintomas-saude
### 8) Crie um model com a classe Sintoma com os campos data, descri��o, intensidade.
### 9) Crie um model com a classe ListaSintomas que ir� receber a chave do storage e um
objeto do tipo Sintomas.
### 10) No CRUDE crie os m�todos inserir, deletar, atualizar, get, getAll conforme visto em
sala de aula.
### 11) Na p�gina sintomas-saude,
No Template:
a) Utilize os componentes do ionic para criar uma lista de sintomas de sa�de,
adicione um float button para permitir inserir um novo sintoma.
No typescript:
b) Adicione os m�todos e vari�veis para listar os sintomas no binding e para
adicionar um novo sintoma de sa�de.
### 12) Na p�gina editar-saude,
No Template:
a) Crie um formul�rio para inserir um sintoma, n�o esque�a de utilizar o
ngModel;
No Typescript:
b) Crie uma fun��o para inserir/editar um sintoma.
N�o esque�a dos imports dos routers, servi�os e models.