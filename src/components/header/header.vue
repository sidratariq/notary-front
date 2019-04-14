            <template>
  <header v-if="((this.$route.path)!='/login')">
    <div class="logo">
      <!-- <img style="z-index=999" src="../../assets/icons/logo.svg"  -->
      <img
        style="z-index=999"
        src
        @click="gohome"
        alt
        height="57px"
        width="87px"
        srcset="../../assets/icons/SVG/SVG/simple.svg"
      >
    </div>

    <input type="checkbox" id="nav-toggle" class="nav-toggle">
    <nav
      v-show="(this.$route.path !='/signup' && this.$route.path !='/commingsoon' && this.$route.path!='/verify')"
    >
      <ul class="nav">
        <router-link
          class="nav-link"
          active-class="activee"
          to="/dashboard"
          @click="changefile"
          exact
          tag="li"
        >
          <a>Home</a>
        </router-link>

        <router-link
          class="nav-link"
          active-class="activee"
          to="/manage"
         
          exact
          tag="li" @click.native="sendrequest(current ='/inbox')"
        >
          <a>Manage</a>
        </router-link>

        <!-- <router-link class="nav-link template" active-class="activee" tag="li" exact to="/template">
          <a>Template</a>
        </router-link>-->
      </ul>
    </nav>

    <label
      v-show="(this.$route.path !='/signup' && this.$route.path !='/commingsoon')"
      for="nav-toggle"
      class="nav-toggle-label"
    >
      <span></span>
      <span></span>
      <span></span>
    </label>

    <!-- <button @click="logout()">najdj</button> -->

    <div
      class="dropdown drop"
      v-show="(this.$route.path !='/signup' && this.$route.path !='/commingsoon')"
    >
      <button
        class="dropdown float-right sethover"
        style="border:1px solid transparent; background-color:#1b499f; margin-top:2px"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span class="setspan">
          <img class="rounded-circle" :src="profilepic" width="100%" height="100%" alt srcset>
        </span>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" style="border-bottom: 1px solid #e9e9e9;" href="#">
          <div class="row">
            <!-- <div class="col-md-12 col-lg-12"> -->
            <div class="col-lg-4 col-md-4">
              <img class="rounded-circle" :src="profilepic" width="100%" height="100%" alt srcset>
            </div>

            <div class="col-lg-8 col-md-8">
              <div class="row" style="font-size:13px;">{{email}}</div>

              <div class="row" style="font-size:13px;">{{username}}</div>
              <!-- </div> -->
            </div>
          </div>
        </a>
        <a class="dropdown-item" @click="logout" style="font-size:13px" href="#">Logout</a>
        <a class="dropdown-item" @click="settingpage" style="font-size:13px" href="#">My preferences</a>
      </div>
    </div>
  </header>
</template>

            <script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      flag: false
    };
  },
  methods: {
    sendrequest(args) {
      let token = this.token;
      let store = this.$store;
      let contracts = [];
      this.$http
        .get("http://localhost:8000/" + args, {
          headers: {
            Token: token
          }
        })
        .then(res => {
          contracts = JSON.parse(res.bodyText);
          store.dispatch("act_contractdata", contracts);

          if (res.status == 200) {
            return res.json();
          }
        })
        .then()
        .then(error => {});
    },

    logout() {
      console.log(this.token);
      this.$http
        .get("http://localhost:8000/Logout", {
          headers: {
            Token: this.token
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.$router.push("/login");
            localStorage.clear();
            this.$router.push("/login");
            return res
          }
        })
        .then(error => {});
    },
    gohome() {
      if (this.$route.path == "/commingsoon") {
        this.$router.push("/home");
      } else {
        this.$router.push("/dashboard");
      }
    },
    settingpage() {
      this.$router.push("/userpreferences");
    },
    changefile() {
      //    this.$store.getters.getavalible
    }
  },

  computed: {
    token() {
      return this.$store.getters.getToken;
    },
    email: function() {
      return this.$store.getters.getemail;
    },

    profilepic: function() {
      return this.$store.getters.getprofilepicture || 0;
    },

    username: function() {
      return this.$store.getters.getusername;
    }
  },

  mounted() {
  }
};
</script>


                                        <style scoped>
/* small screen */
* {
  margin: 0;
  padding: 0;
}

:root {
  --background: #005cb9;
  --height: 52px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #222;
  font-family: sans-serif;
}

.content {
  height: 200vh;
  background-color: #333;
  background-blend-mode: multiply;
  background-size: cover;
  display: grid;
  place-content: center;
}

/* navigation style starts here */

.setspan {
  display: block;
  height: 45px;
  width: 50px;
  padding-right: 1%;
}

.drop ul li {
  list-style: none;
}

header {
  /* previous */
  /* background-color: #005cb9; */
  background-color: #1b499f;
  color: #1b499f;
  width: 100%;
  height: var(--height);
  z-index: 999;
}

.template {
  display: none;
}

.nav li {
  width: 90%;
}

nav {
  position: absolute;
  text-align: left;
  top: 100%;
  left: 0;
  display: block;
  width: 100%;
  background-color: #1b499f;

  transform: scale(1, 0);
  transform-origin: top;
  transition: transform 400ms ease-in-out;
}

nav li {
  margin-bottom: 1em;
  margin-left: 1em;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 250ms ease-in-out 250ms;
}

.nav .nav-link {
  border-top: 1px solid silver;
}

.nav-link {
  width: 100px;
}

.nav:nth-last-child() {
  border-top: 1px solid red;
}

nav a:hover {
  color: #000;
}

.nav li a {
  color: #c9dcf0;
  text-decoration-style: none;
  font-family: "Maven Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
}

.nav-toggle:checked ~ nav {
  transform: scale(1, 1);
}

.nav-toggle:checked ~ nav a {
  opacity: 1;
  transition: opcacity 150ms ease-in-out;
}

.nav-toggle {
  display: none;
}

.nav-toggle-label {
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 1em;
  margin-left: 1em;
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-toggle-label span {
  display: block;
  width: 100%;
  height: 4px;
  background: white;
  margin: 1px;
}

.logo {
  margin-left: 170px;
}

.drop {
  display: none;
}

li .nav-link {
  width: 100%;
}

.nav-link .router-link-exact-active .active {
  color: red;
}

@media screen and (min-width: 756px) {
  .menu-item {
    line-height: 10px;
  }

  .sethover:hover {
    background-color: #e9e9e9;
  }

  .nav-toggle-label {
    display: none;
  }

  header {
    display: grid;
    /* width: 100%; */
    height: 55px;
    grid-template-columns: 1fr auto minmax(800px, 3fr) 1fr;
  }

  .logo {
    grid-column: 1/2;
    margin-left: 30px;
  }

  .logo img {
    padding-left: 5%;
  }

  .drop {
    grid-column: 4;
    height: 50px;
    display: block;
  }

  nav {
    all: unset;
    grid-column: 2/4;
    background-color: #1b499f;
    height: 50px;
  }

  .template {
    display: block;
  }

  .nav .nav-link[data-v-12835cef] {
    border-top: 1px solid transparent;
  }

  nav a {
    opacity: 1;
    position: relative;
  }

  nav ul {
    display: flex;
    justify-content: center;
    margin-top: 4px;
  }

  .nav li {
    margin-bottom: 0;
    width: 81px;
  }

  a:hover::after {
    transform: scale(1, 1);
    content: "";
    display: block;
    height: 3px;
    background: white;
    position: absolute;
    bottom: -0.5em;
    left: 0;
    right: 0;
    border-radius: 2%;
    transform: scale(0, 1);
    transform-origin: left;
    transition: transform ease-in-out 250ms;
  }

  .drop ul {
    margin-right: 2px;
    margin-bottom: 3em;
  }

  .drop ul li span:hover {
    background-color: #005cb9;
  }

  .drop li span {
    margin: 3px 0px;
    height: 100%;
  }

  .dropdown {
    position: relative;
  }

  .activee {
    /* border-bottom: 1px solid white; */
    position: relative;
  }

  .activee a::after {
    content: " ";
    height: 3px;
    background: white;
    position: absolute;
    bottom: -0.5em;
    left: 4px;
    right: 0;
    border-radius: 2%;
    /* transform: scale(0,1); */
    transform-origin: left;
    transition: transform ease-in-out 250ms;
  }

  .dropdown ul {
    position: absolute;
    top: 55px;
    left: 40px;
    width: 228px;
    font-size: 14px;
    background-color: white;
    display: none;
    border-radius: 2px;
  }

  ul .avalible {
    display: block;
  }

  .dropdown ul li {
    padding: 14px 14px;
    color: black;
  }

  /* fav#005cb9; */

  .dropdown ul li:hover {
    background-color: #bad3f8;
  }
}
</style>
