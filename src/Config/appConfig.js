class AppConfig {
  baseUrl = "https://jsonplaceholder.typicode.com";
  todos = this.baseUrl + "/todos";
  users = this.baseUrl + "/users";
}

const appconfig = new AppConfig();

export default appconfig;
