<template>
  <v-app id="home">
    <!-- <NavBar /> -->
    <v-container fluid>
      <div class="home-image">
        <div class="appbar">
          <v-spacer></v-spacer>
          <v-btn text @click="scroll('home')" class="white--text">Home</v-btn>
          <v-btn text @click="scroll('project')" class="white--text"
            >Projects</v-btn
          >
          <v-btn text @click="scroll('myskill')" class="white--text"
            >Myskills</v-btn
          >
          <v-btn text @click="scroll('aboutme')" class="white--text">
            About Me</v-btn
          >
        </div>
        <v-col cols="8" class="desc">
          <h3 class="white--text text--darken-1">Hello, My name is</h3>
          <h1 class="white--text" id="name">Kuon Sovila</h1>
          <h3 class="white--text">
            I'm a Creative Problem Solver and Back-end Developer.<br />
          </h3>
          <br />
          <v-btn
            tile
            color="#A7121D"
            dark
            href="https://github.com/kuonsovila"
            target="_blank"
          >
            Github
          </v-btn>
        </v-col>
      </div>
      <div class="project-image">
        <div class="first" id="project">
          <p class="project-title">My Projects</p>
          <v-col cols="12">
            <v-card color="rgba(40,44,52,.95)" dark>
              <v-row>
                <v-col cols="8" class="detail-first">
                  <v-card-title class="text-h5"> CRUD </v-card-title>

                  <v-card-subtitle class="subtitle"
                    >This app allow user to Insert Update Read and Delete. I've
                    use Json-server to store data.
                  </v-card-subtitle>

                  <!-- <v-card-actions>
                    <v-btn text> Listen Now </v-btn>
                  </v-card-actions> -->
                </v-col>
                <v-col cols="4">
                  <v-row class="btn-crud">
                    <v-btn>Front-end</v-btn> &nbsp;&nbsp;&nbsp;&nbsp;
                    <v-btn>Visit</v-btn>
                  </v-row>
                  <v-img src="../assets/coding.jpg" id="crud-pic"></v-img>
                </v-col>
              </v-row>
            </v-card>
            <br />
            <br />
            <v-card color="rgba(40,44,52,.95)" dark>
              <v-row>
                <v-col cols="8" class="detail-first">
                  <v-card-title class="text-h5"> CRUD </v-card-title>

                  <v-card-subtitle class="subtitle"
                    >This app allow user to Insert Update Read and Delete. I've
                    use Json-server to store data.
                  </v-card-subtitle>
                </v-col>
                <v-col cols="4">
                  <v-row class="btn-crud">
                    <v-btn>Front-end</v-btn> &nbsp;&nbsp;&nbsp;&nbsp;
                    <v-btn>Visit</v-btn>
                  </v-row>
                  <v-img src="../assets/coding.jpg" id="crud-pic"></v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </div>
      </div>
      <div id="myskill" class="skill-image">
        <div class="skill">
          <p class="skill-header">My Skill</p>
          <v-card color="rgba(40,44,52,.95)" dark>
            <!-- back-end -->
            <v-card-title class="ma-5 mt-6 pt-3 skill-title"
              >Back-end Development</v-card-title
            >
            <v-card-subtitle class="skill-subtitle ml-5 mb-3">
              &nbsp; Nest.js &nbsp;. Javascript &nbsp;. Java &nbsp;. Mysql .
              &nbsp; Typescript . &nbsp; Git
            </v-card-subtitle>
            <v-divider></v-divider>

            <!-- front-end -->
            <v-card-title class="ma-5 skill-title"
              >Front-end Development</v-card-title
            >
            <v-card-subtitle class="skill-subtitle ml-5 mb-3">
              &nbsp; HTML5 &nbsp;. CSS &nbsp;. JS ES6 &nbsp;. VUE.JS
            </v-card-subtitle>
            <v-divider></v-divider>

            <!-- security -->
            <v-card-title class="ma-5 skill-title">Security</v-card-title>
            <v-card-subtitle class="skill-subtitle ml-5 mb-3">
              &nbsp; Bcrypt &nbsp;. Json web token
            </v-card-subtitle>
            <v-divider></v-divider>

            <!-- development environment -->
            <v-card-title class="ma-5 skill-title"
              >Development Environment</v-card-title
            >
            <v-card-subtitle class="skill-subtitle ml-5 mb-3">
              &nbsp; APIs &nbsp;. Git . &nbsp; npm . &nbsp; ESlint . &nbsp;
              Prettier . &nbsp; Heroku . &nbsp; ENV . &nbsp;Command Line
            </v-card-subtitle>
            <v-divider></v-divider>
          </v-card>
        </div>
      </div>
      <div id="aboutme" class="about-image">
        <div class="aboutme">
          <p class="about-title">
            ABOUT ME &nbsp; <span>Here's Why I Build</span>
          </p>

          <!-- technology -->
          <v-card color="rgba(40,44,52,.95)" dark>
            <v-card-title class="ma-5 mt-6 pt-3 skill-title"
              >Technology</v-card-title
            >
            <v-card-subtitle class="about-subtitle ml-5 mb-3">
              The improvements in technology over the last 15 years have been
              huge. We interact with technology on a daily basis and the tech
              industry now has one of the most significant impacts on the world.
              The industry is constantly changing and
              <span>
                I believe that change is good, and that learning should never
                stop.
              </span>
              &nbsp; I love learning new things on a daily basis as a Developer
              and being at the forefront of this phenomenal industry. Over the
              last several years things have begun moving incredibly fast and
              web development is becoming even more important as Web Apps
              replace traditional software.
            </v-card-subtitle>
          </v-card>

          <!-- little first -->
          <v-card color="rgba(40,44,52,.95)" dark>
            <v-card-title class="ma-5 mt-6 pt-3 skill-title"
              >Little First</v-card-title
            >
            <v-card-subtitle class="about-subtitle ml-5 mb-3">
              Everythings is start from little thing. Then the bunch of little
              things are going to do The Great Thing.
              <span> I know that, little things make all the difference. </span>
            </v-card-subtitle>
          </v-card>

          <!-- contact -->
          <v-card color="rgba(40,44,52,.95)" dark>
            <p class="ma-5 mt-6 pt-3 contact-title">Contact Me</p>
            <v-card-subtitle class="contact-subtitle ml-5 mb-3">
              Email: kuonsovila@gmail.com <br />
              Phone: (+855) 93 759 695
            </v-card-subtitle>
          </v-card>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.skill-subtitle {
  font-size: 2.5vh;
}
.skill-title {
  color: rgb(238, 182, 144);
}
.about-subtitle {
  font-size: 2.2vh;
  color: white;
  padding-bottom: 20px;
}
.about-subtitle span {
  background-color: aqua;
  color: black;
  border-radius: 5px;
  padding: 1px;
}
.contact-title {
  text-align: center;
  font-size: 3vh;
  color: rgb(238, 182, 144);
}
.contact-subtitle {
  text-align: center;
  padding-bottom: 10px;
}
.skill {
  width: 60%;
  margin: auto;
}
.aboutme {
  width: 60%;
  margin: auto;
  padding-top: 5%;
}
.about-title {
  font-size: 5vh;
  color: white;
}
.about-title span {
  font-size: 3vh;
}
#crud-pic {
  width: 250px;
  height: 200px;
  justify-content: center;
}
.btn-crud {
  margin: 10px;
  margin-left: 10px;
}
.skill-header {
  font-size: 8vh;
  color: white;
  font-family: "Times New Roman", Times, serif;
}
.subtitle {
  padding-top: 5%;
}
.project-title {
  font-size: 8vh;
  color: white;
  font-style: italic;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  /* text-align: left; */
}
.detail-first {
  padding: 20px;
}
.appbar {
  margin-left: 70%;
  padding: 10px;
  position: fixed;
}
#name {
  font-size: 40px;
}
.link-info {
  justify-content: center;
  padding: 10px;
}
.desc {
  padding-top: 23%;
  text-align: center;
}
.home-image {
  background-image: url("../assets/code.jpg");
  height: 800px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.project-image {
  background-image: url("../assets/coding.jpg");
  height: 800px;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.skill-image {
  background-image: url("../assets/kevin-canlas-ia7-T2bjDb4-unsplash.jpg");
  height: 800px;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.about-image {
  background-image: url("../assets/mohammad-rahmani-1bNQVGzuy0U-unsplash.jpg");
  height: 800px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.topInverse {
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.first {
  width: 60%;
  /* height: 334px; */
  padding: 5rem 3rem;
  margin: auto;
}
.second {
  width: 100%;
  height: 400px;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor2 {
  background-color: #ce1d2a;
}

.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 120px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}

.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
/* .bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 10px;
  left: 0;
  background: url("https://i.pinimg.com/564x/00/47/13/004713dffdeba3ebcab834b9ab757e2a.jpg")
    no-repeat center center;
  background-size: cover;
  background-color: red;
  transform: scale(1.1);
} */
</style>
