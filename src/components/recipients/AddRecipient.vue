            <template>
  <div>
    <head_head></head_head>

    <div class="container set-middle">
      <h2 class="set-recipient">Add Recipients</h2>

      <div class="row" style="border:1px solid red; position:relative; ">
        <span class="setround">
          <i class="far fa-paper-plane inside"></i>
        </span>
        <div class="col-md-12 col-xs-12 col-lg-12">
          <p class="font-weight-bold text-muted removemargin">Bold text.</p>
          <strong>sidra tariq</strong>
        </div>
      </div>

      <recipient_box
        :no_of_recipient="no_of_recipient"
        :index="index"
        v-for="(key,index) in quotes"
        :key="index"
        @DeleteRecipient="Remove()"
      >
        i am key{{key}} ******
        i am value{{index}}
      </recipient_box>

      <div class="btn btn-primary" @click="newRecipient()">
        <span>
          <i class="fas fa-user"></i>
          <i class="fas fa-plus" style="font-size:8px"></i>
        </span>
        create one more
      </div>
    </div>
  </div>
</template>

            <script>
import { mapActions } from "vuex";
import recipient_box from "./Recipient.vue";

import head_head from "../header/header.vue";

export default {
  data() {
    return {
      maxQuotes: 10,
      quotes: ["Just a quote"],
      recipeint: [{ name: "", email: "" }]
    };
  },

  components: {
    head_head,
    recipient_box
    // local_header
  },

  props: {},

  methods: {
    newRecipient(recipeint) {
      this.quotes.push(recipeint);
    },

    Remove(index) {
      if (this.quotes.length > 1) {
        this.quotes.splice(index, 1);
      } else {
        alert("you need to have atleast one recipient");
      }
    }
  },
  computed: {
    no_of_recipient: function() {
      return this.recipeint.length;
    }
  }
};
</script>

            <style scoped>
* {
  background-color: rgb(244, 244, 244);
  border-left: 0.5px solid black;
}

.container {
  background-color: pink;
}

.set-middle {
  /* margin-right: 150px; */
  margin-left: 200px;
}

.set-recipient {
  padding: 30px;
}

.removemargin {
  margin-bottom: 0px;
}

.setround {
  border: 1px solid #ccc;
  border-radius: 50%;
  position: absolute;
  left: 0px;
  z-index: 122;
}

.inside {
  margin: 6px;
  color: #777;
}
</style>
