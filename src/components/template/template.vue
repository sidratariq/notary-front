<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changename">Change my name</button>
        <p>{{name}}</p>
        <p>{{age}}</p>
        <hr>

        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name" @namewasreset="name= $event" :resetFn="resetname" :userage="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userage="age" @editage="age = $event"></app-user-edit>
            </div>
        </div>


        <div id="html-content-holder" style="background-color: #F0F0F1; color: #00cc65; width: 500px;
        padding-left: 25px; padding-top: 10px;">
        <strong>Codepedia.info</strong><hr />
        <h2 style="color: #3e4b51;">
            Html to canvas, and canvas to proper image
        </h2>
        <p style="color: #3e4b51;">
            <b>Codepedia.info</b> is a programming blog. Tutorials focused on Programming ASP.Net,
            C#, jQuery, AngularJs, Gridview, MVC, Ajax, Javascript, XML, MS SQL-Server, NodeJs,
            Web Design, Software</p>
        <p style="color: #3e4b51;">
            <b>html2canvas</b> script allows you to take "screenshots" of webpages or parts
            of it, directly on the users browser. The screenshot is based on the DOM and as
            such may not be 100% accurate to the real representation as it does not make an
            actual screenshot, but builds the screenshot based on the information available
            on the page.
        </p>
    </div>
    <input id="btn-Preview-Image" type="button" value="Preview" />
    <a id="btn-Convert-Html2Image" href="#">Download</a>
    <br />
    <h3>Preview :</h3>
    <div id="previewImage">
    </div>

    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {

        data(){
            return{
                name:'Max',
                age:27
            }
        },
        methods:{
            changename(){
                this.name = 'anna'
            },
            resetname(){
                this.name = 'max'
            }
        },

        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        /* background-color: lightblue; */
    }
</style>