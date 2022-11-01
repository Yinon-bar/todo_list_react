class AppConfig {
  baseUrl = "https://jsonplaceholder.typicode.com";
  todos = this.baseUrl + "/todos";
  users = this.baseUrl + "/users";
  posts = this.baseUrl + "/posts";
}

const appconfig = new AppConfig();

export default appconfig;
