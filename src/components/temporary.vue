        <template>

    <!-- Drop down for options -->
      <div class="dropdown">
        <button
          class="btn dropdown-toggle seteffect"
          type="button"
          style="font-size:13px; "
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{'25%'}}
        </button>
        <div class="dropdown-menu menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item seteffect" type="button" style="font-size:13px; ">

           25%
          </button>

          <button class="dropdown-item" style="font-size:13px;" type="button">
            <span>
              50%
            </span>
          </button>

           <button class="dropdown-item" style="font-size:13px;" type="button">
            <span>
              75%
            </span>
          </button>

           <button class="dropdown-item" style="font-size:13px;" type="button">
            <span>
              100%
            </span>
          </button>

           <button class="dropdown-item" style="font-size:13px;" type="button">
            <span>
              125%
            </span>
          </button>

            <button class="dropdown-item" style="font-size:13px;" type="button">
            <span>
              150%
            </span>
          </button>
          
            <button class="dropdown-item" style="font-size:13px;" type="button">
            <span>
              200%
            </span>
          </button>

           <button class="dropdown-item" style="font-size:13px;" type="button">
            <span>
              400%
            </span>
          </button>

          <hr>

           <button class="dropdown-item" style="font-size:13px;" type="button">
            <span>
              Fix to width
            </span>
          </button>
        </div>
      </div>
</template>



<style scoped>
*{
  border: 1px solid black;
}

.seteffect:hover {
  background-color: transparent;
  border-color: transparent;
  color: #1951b8;
}


.menu {
    min-width: 6rem;
}
</style>