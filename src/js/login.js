var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {
  body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function () {
  body.className = "sign-up-js";
});

const Accounts = JSON.parse(window.localStorage.getItem("@BomLook:users")) ?? [
  // criamos as contas nesse array de objetos
  {
    id: 1,
    email: "cliente@gmail.com",
    password: "123",
  },
  {
    id: 2,
    email: "admin@gmail.com",
    password: "123",
  },
];

function SignIn(iEmail, iPass) {
  // const Login vai receber o retorno a baixo
  const Login = Accounts.filter(
    // primeiro filtramos as contas cadastradas pra ver se o email providenciado esta cadastrado
    (account) => account.email === iEmail
  ).map(
    // mapeamos o array que o filter retornou e verificamos agora se a senha cadastrada é a mesma que foi inserida
    (account) => (account.password === iPass ? true : false)
  );
  Login.length > 0 // se o email existir retorna o Login[0] então se não existir o [0] o email não foi encontrado
    ? Login[0] // Emite um alert devido a resposta do Login[0] (.map retorna array)
      ? iEmail === "admin@gmail.com"
        ? (window.location.href = "indexadm.html")
        : (window.location.href = "indexcliente.html")
      : activeSnackbar("Dados Inválidos")
    : activeSnackbar("Email não Cadastrado");
}

function SignUp(iEmail, iPass) {
  const accounts = Accounts.filter((object) => object.email === iEmail);
  if (accounts.length > 0) {
    activeSnackbar("Email já Cadastrado");
    return;
  }

  const data = {
    id: Accounts.length + 1,
    email: iEmail,
    password: iPass,
  };

  Accounts.push(data);
  console.log(Accounts);
  window.localStorage.setItem("@BomLook:users", JSON.stringify(Accounts));

  SignIn(iEmail, iPass);
}

function handleSubmit(e, type) {
  e.preventDefault(); // impede o formulario de recarregar a pagina
  const iEmail = document.getElementById(
    type === "signup" ? "signup-email" : "signin-email"
  ).value; // pega o email inserido
  const iPass = document.getElementById(
    type === "signup" ? "signup-password" : "signin-password"
  ).value; // pega a senha inserida

  if (type == "signup") SignUp(iEmail, iPass);
  if (type == "signin") SignIn(iEmail, iPass);
}
