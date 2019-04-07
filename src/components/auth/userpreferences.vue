    <template>
        <div class="row mx-0">
        <div class="signatures-preferences ng-scope container" >
            <!-- // changes -->
    <modal class="col-lg-12 col-md-12 col-sm-12 col-sm-12" v-if="flag"></modal>
            
        <div class="section-header">
            <h1 class="header-title ng-binding">Personal Information</h1>
        </div>

        <uploadphoto v-if="uploadflag"></uploadphoto>

        <!-- side things -->
        <div class="grid section">
                        <div class="row">
                            <!-- @click="getclick" -->
                                <div class="col-md-12 col-lg-12">  
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-3">
                                                 <span>
                                                    <img class="rounded-circle" :src="profilepic"  width="100%" height="100%" alt="" srcset="">
                                                </span>
                                            </div>

                                            <div class="col-md-5">
                                                 <div class="row">
                                                   <strong data-qa="preferences-user-name" >{{username}}</strong>
                                                   <button class="btn btn-link" style="display:inline" data-toggle="modal" data-target="#deletedocument" href="#">Edit</button>
                                                 </div>

                                                 <div class="row">
                                                    <span>
                                                    <!-- email here -->
                                                     {{email}}
                                                    </span>   
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6">
                                        <!-- Example split danger button -->
                                        <div class="btn-group">
                                          <button type="button" class="btn btn-primary">Edit</button>
                                          <button type="button" class="btn btn-primary btn-lg btn-trigger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="sr-only">Edit Photo</span>
                                          </button>
                                          <div class="dropdown-menu">
                                            <a class="dropdown-item date" @click="getclick" href="#">Upload Photo</a>
                                            <a class="dropdown-item date" href="#">Delete</a>
                                          </div>
                                        </div>
                                    </div>

                                </div>                                            
                        </div>


                    </div>
                

                <!-- fun aand stuff -->
                <div class="grid">
                        <h2 class="header-title ng-binding">
                            Company and Phone Number
                        </h2>

                        <div class="col-2-5">
                                                     
                            <div class="form-group" style="padding-left:73.469px" >
                                <label class="label" for="jobtitle">Company</label>
                                <input type="text" class="input-text ng-pristine ng-valid ng-not-empty ng-touched" id="jobtitle"  data-qa="preferences-job-title-input" data-kwimpalastatus="alive" data-kwimpalaid="1551144858268-29">
                            </div>

                            <div class="form-group" style="padding-left:73.469px" >
                                <label class="label" for="phone">Phone
                            <span class="text-muted" data-children-count="0">(optional)</span>
                            </label>
                            <input type="text" class="input-text " id="phone"  data-kwimpalastatus="alive" data-kwimpalaid="1551144858268-33">

                            </div>
                        </div>
                    </div>


        <!-- signature place -->
        <div class="section-header">
            <h1 class="header-title ">Signatures</h1>
        </div>

        <div>
            <div class="section">
                <div class="header-description">
                    <p class="">
                        Manage different signature styles and variations of your name.
                    </p>
                </div>
                <table class="table sig-table">
                    <thead>
                        <tr class="vh">
                            <th class="">Signature</th>
                            <th class="">Signature initials</th>
                            <th class="">Edit</th>
                            <th class="">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr data-qa="signature-row" >
                            <td>
                                <div class="sig-cell">
                                    <div class="sig-chrome" >
                                        <span class="sig-chrome-title-top">DocuSigned by:</span>

                                        <div class="sig-container">
                                            <!-- <img  class="sig" data-qa="preferences-signature-image" alt="sidraTariq" > -->
                                            <!-- :src="/users/6185ece9-4de7-4540-a6c3-756b1fea379c/signatures/a425a358-a3b8-47a9-b1ac-69e35737ebce/signature_image" -->
                                            <!-- src="/users/6185ece9-4de7-4540-a6c3-756b1fea379c/signatures/a425a358-a3b8-47a9-b1ac-69e35737ebce/signature_image" -->
                                        </div>
                                        <span class="sig-chrome-title-bottom">6185ECE94DE7454...</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div class="sig-chrome" >
                                    <span class="sig-chrome-title-top" aria-hidden="true">
                                        DS
                                    </span>
                                    <div class="sig-container">
                                        <!-- <img class="sig" alt="S"> -->
                                    </div>
                                </div>
                            </td>
                           
                            <td class="sig-action-link u-nowrap">
                                <button class="btn btn-link" style="display:inline" data-toggle="modal" data-target="#deletedocument" href="#">Edit</button>
                            </td>
                           
                            <td class="sig-action-link u-nowrap">
                                <button class="btn btn-link" style="display:inline" data-toggle="modal" data-target="#deletedocument" href="#">Delete</button>
                            </td>
                        </tr><!-- end ngRepeat: sig in $props.signaturesCollection | limitTo : signatures.numSignaturesToDisplay -->
                    </tbody>
                </table>
                <!-- ngIf: signatures.showDisplayAdditionalButton() -->

                <div class="add-new-sig">
                <button class="btn btn-link" @click="clicked" style="display:inline" data-toggle="modal"  href="#"> + Add New</button>

                </div>
            </div>
        </div>


        <!-- button and stuff -->

        <div class="section-footer">
                    <div class="action-btns">
                        <button class="btn btn-primary ng-scope ng-binding" type="button" ng-disabled="personalInfoForm.$pristine || personalInfo.isUploading" ng-click="personalInfo.save()" ds-modal="preferences/common/saving-modal.html" ds-analytics="preferencesSaveSettings" data-qa="preferences-save-btn">
                            Save
                        </button>
                        <button class="btn btn-minor ng-binding" type="button" ng-disabled="personalInfoForm.$pristine || personalInfo.isUploading" ng-click="personalInfo.cancel()" data-qa="preferences-cancel-btn">
                            Cancel
                        </button>
                    </div>
                </div>

        </div>      

        <!-- inputs and fun -->
     

               <!-- delete document -->
          <div id="deletedocument" class="modal fade" role="dialog">
        <div class="modal-dialog">
        <div class="modal-content">
            
        <div class="modal-header">
            <h6> Delete Document</h6>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
            <div class="form-group" style="padding-left: 10px; padding-right: 10px;">
            <p>Are you sure you want to delete document</p>
            </div>

            <div class="modal-footer">
            <button type="button"  class="btn btn-primary" data-dismiss="modal">Delete</button>
            <button type="button" class="btn" id="cancel" data-dismiss="modal">Cancel</button>
            </div>
        </div>
        </div>     
        </div>
        
        



        </div>
    </template>

    <script>
        import uploadphoto from "../modals/photoupload.vue";
        import modal from "../modals/modal.vue";
        import { mapActions } from "vuex";


    export default {
    components:{
        uploadphoto,
        modal

    },
    methods:{
        getclick() {
        this.$store.dispatch("changephoto");
        },
        clicked(){
            this.$store.dispatch('changeflag')
        }  
    },computed:{

        uploadflag() {
        return this.$store.getters.getupload;
        },
        profilepic:function(){
            return 'http://localhost:8000/'+ JSON.parse(localStorage.getItem('Userdata')).Userdata.Picture
                                            
        },
        flag() {
         return this.$store.getters.getflag;
        },
        userinformation(){
            
        },
          username:function(){
                return JSON.parse(localStorage.getItem("Userdata")).Userdata.Name
            },

        email:function(){
                return JSON.parse(localStorage.getItem("Userdata")).Userdata.Email 
            },
    }

    }
    </script>

    <style scoped>
    *{
        /* border: 1px solid black; */
    }
    .section-header {
        border-bottom: 2px solid #f4f4f4;
        margin-top: 12px;
        padding: 0 24px 22px 24px;
    }
    .header-actions {
        margin-top: 18px;
    }
    .header-title {
        margin-bottom: 4px;
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
    .header-title {
        margin-bottom: 4px;
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
    .header-actions {
        margin-top: 18px;
    }
    h1 {
        font-family: "Maven Pro","Helvetica Neue",HelveticaNeue,Helvetica,Arial,sans-serif;
        font-size: 22px;
        font-weight: 700;
        line-height: 28px;
        margin: 0;
    }


    
        .date{
            color: rgb(51, 51, 51);
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-weight: normal;
            text-rendering: optimizelegibility;
            font-size: 13px;
            line-height: 18px;
        }
    .section {
        margin: 0 24px;
        padding: 23px 0;
    }
    .header-description {
        margin-top: 16px;
    }
    .signatures-preferences .sig-table {
        margin-top: 20px;
    }
    .table {
        background-color: #fff;
        border-collapse: separate;
        border-spacing: 0;
        border-top: 1px solid #e9e9e9;
        width: 100%;
    }
    .signatures-preferences .sig-table {
        margin-top: 20px;
    }
    .signatures-preferences .sig-table tr {
        padding-bottom: 1px;
    }
    .signatures-preferences .sig-cell {
        padding-right: 2em;
    }
    .sig-chrome {
        border-left: 2px solid #005cb9;
        border-radius: 8px;
        display: block;
        height: 55px;
        margin: 4px 0;
        overflow: visible;
        position: relative;
    }
    .sig-chrome-title-top {
        font-weight: 700;
        top: -8px;
    }
    .sig-chrome .sig-container {
        height: 55px;
        overflow: hidden;
        padding-left: 10px;
        position: absolute;
        white-space: nowrap;
        width: 100%;
    }
    .sig-chrome-title-bottom {
        bottom: -7px;
    }
    .sig-chrome-title-bottom, .sig-chrome-title-top {
        font-size: 10px;
        left: 21px;
        position: absolute;
    }
    .sig-chrome::after, .sig-chrome::before {
        border: 0 solid #005cb9;
        content: '';
        display: block;
        height: 38px;
        left: -1px;
        position: absolute;
        width: 20px;
    }
    .sig-chrome::before.sig-chrome::after {
        border-bottom-left-radius: 8px;
        border-bottom-width: 2px;
        bottom: -2px;
    }
    .table td, .table th {
        border-bottom: 1px solid #e9e9e9;
    }
    .signatures-preferences .sig-action-link {
        width: 20px;
    }
    .table td:last-child, .table th:last-child {
        border-right: none;
        padding-right: 24px;
    }
    .signatures-preferences .sig-action-link {
        width: 20px;
    }
    .table td, .table th {
        border-bottom: 1px solid #e9e9e9;
    }
    .table td:last-child, .table th:last-child {
        border-right: none;
        padding-right: 24px;
    }
    .signatures-preferences .sig-action-link {
        width: 20px;
    }
    .signatures-preferences .add-new-sig {
        margin-top: 20px;
    }
    .btn-minor.disabled, .btn-minor:disabled, .btn-minor[disabled], .btn-plain.disabled, .btn-plain:disabled, .btn-plain[disabled] {
        background-color: transparent;
        border-color: transparent;
        color: #a9a9a9;
    }
    .btn-primary:disabled, .btn-primary[disabled] {
        background-color: #d8edfa;
        border-color: #d8edfa;
        color: #fff;
    }
    .btn:disabled, .btn[disabled] {
        cursor: not-allowed;
    }
    /* // profiletab */
    .grid {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
   
    .m-top-x-small {
        margin-top: 12px!important;
    }
    .btn-trigger.btn-lg {
        padding-right: 34px;
    }
    .btn-trigger {
        /* padding-right: 30px; */
        position: relative;
        text-align: left;
    }
    .btn-primary {
        background-color: #2463d1;
        border-color: #2463d1;
        color: #fff;
    }
    .btn-lg {
        font-size: 13px;
        min-height: 34px;
        padding: 7px 18px;
    }
    /* // fun and stuff */
    .section {
        margin: 0 24px;
        padding: 23px 0;
    }
    .grid {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
    .heading-2, h2 {
        font-family: "Maven Pro","Helvetica Neue",HelveticaNeue,Helvetica,Arial,sans-serif;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        margin: 0;
    }
    .header-title {
        margin-bottom: 4px;
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
    .form-group, .form_unit {
        display: block;
        margin: 24px 0;
    }
    .form-group .label, .form_unit .label {
        display: inline-block;
        font-weight: 600;
        line-height: 18px;
        margin-bottom: 4px;
    }
    .input-text, .input-textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        /* appearance: none; */
        background: #fff;
        border: 1px solid #868686;
        border-radius: 2px;
        height: auto;
        outline: 0;
        padding: 5px 8px 6px 8px;
        width: 100%;
    }
    .grid::after {
        clear: both;
        content: '';
        display: block;
        height: 0;
        width: 100%;
    }
    .section::after {
        clear: both;
        content: '';
        display: table;
    }
    .section+.section {
        border-top: 2px solid #f4f4f4;
    }
    .section {
        margin: 0 24px;
        padding: 23px 0;
    }
    /* // footer and stuff */
    .section-footer {
        border-top: 2px solid #f4f4f4;
        margin-bottom: 22px;
        padding: 22px 24px 0 24px;
    }
    .action-btns, .btn-row {
        margin-left: -8px;
        margin-top: -8px;
    }
    .action-btns .btn {
        white-space: nowrap;
    }
    .action-btns>.btn, .action-btns>.btn-group, .btn-row>.btn, .btn-row>.btn-group, .btn-row>.btn-plain {
        margin-left: 8px;
        margin-top: 8px;
    }
    .btn-primary {
        background-color: #2463d1;
        border-color: #2463d1;
        color: #fff;
    }
    .btn-minor, .btn-plain {
        background-color: transparent;
        border-color: transparent;
        color: #1e1e1e;
        -webkit-transition: none;
        -o-transition: none;
        transition: none;
    }
    </style>
