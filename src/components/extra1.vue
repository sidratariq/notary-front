<template>
  <div class="container">
    <input style="display:none" ref="fileInput" type="file" @change="onFileSelected" name id>
    <button @click="$refs.fileInput.click()">Pick a file</button>
    <button @click="onupload">upload</button>
    <img :src=imgsource alt="">

    <h6>
      <button>Search</button>
    </h6>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selectedFile: null,
      filesource:''
    };
  },
  methods: {
    onFileSelected(event) {
      let store = this.$store;
      let filesource = this.imagesource
      this.selectedFile = event.target.files[0];
      if (event.target.files.length > 0) {
        let reader = new FileReader();
        reader.onload = function() {
          var dataURL = reader.result;
          store.dispatch("changeimagesource", dataURL);
          // document.getElementById("image").src = dataURL;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    },
    onupload() {
      let token = this.token;
      const formData = new FormData();
      formData.append("userfile", this.selectedFile);

      axios
        .post(
          "http://localhost:8000/uploadProfilePic",
          formData,
          {
            headers: {
              Token: token
            }
          },
          {
            onUploadProgress: progressEvent => {
            console.log("i am not running")

              console.log(
                "Upload Progess" +
                  Math.round((progressEvent.loaded / progressEvent.total) * 10)
              );
            }
          }
        )
        .then(res => {
         alert(res);
         return res.json()
        });
        //

  // axios.post('my-domain.com/file-upload', formData, {
  //   onUploadProgress: progressEvent => {
  //     console.log(progressEvent.loaded / progressEvent.total)
  //   }
  // })



        //  
    }
  },

  computed: {
    token() {
      return this.$store.getters.getToken;
    },
     imgsource(){
      return this.$store.getters.getimagesource;
    }
  }
};
</script>

<style scoped>
</style>
