<template>
    <div class="row mx-0">
        <head_head></head_head>
       <div class="signatures-preferences ng-scope" >
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
                    <!-- ngIf: $props.signaturesCollection.length == 0 -->
                    <!-- ngRepeat: sig in $props.signaturesCollection | limitTo : signatures.numSignaturesToDisplay --><tr ng-repeat="sig in $props.signaturesCollection | limitTo : signatures.numSignaturesToDisplay " data-qa="signature-row" class="ng-scope">
                        <td>
                            <div class="sig-cell">
                                <div class="sig-chrome" >
                                    <span class="sig-chrome-title-top">DocuSigned by:</span>

                                    <div class="sig-container">
                                        <img  class="sig" data-qa="preferences-signature-image" alt="sidraTariq" >
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
                                    <img class="sig" alt="S">
                                </div>
                            </div>
                        </td>
                        <td class="sig-action-link u-nowrap">
                            <button type="button" class="link"  data-qa="edit-signature" ds-analytics="preferencesSignatureEdit">
                                Edit
                                <span class="vh ">
                                    sidraTariq
                                </span>
                            </button>
                        </td>
                        <td class="sig-action-link u-nowrap">
                            <button type="button" class="link"  data-qa="delete-signature" ds-analytics="preferencesSignatureDelete">
                                Delete
                                <span class="vh">
                                    sidraTariq
                                </span>
                            </button>
                        </td>
                    </tr><!-- end ngRepeat: sig in $props.signaturesCollection | limitTo : signatures.numSignaturesToDisplay -->
                </tbody>
            </table>
            <!-- ngIf: signatures.showDisplayAdditionalButton() -->

            <div class="add-new-sig">
                <button type="button" class="link" data-qa="add-new-signature" ds-analytics="preferencesSignatureAdd">
                    + Add New
                </button>
            </div>
        </div>
    </div>

    <div class="text-center grid pad " ds-loading="signatures.loaded" ds-loading-succeeded="signaturesDoneLoading" ds-loading-error="Oops! We had trouble loading your personal information. Go ahead and try that again."></div>
</div>


<!-- // changes -->

    <div class="section-header">
        <h1 class="header-title ng-binding">Personal Information</h1>

        
        <div class="header-actions" ng-show="personalInfoDoneLoading">
            <button class="btn btn-primary ng-scope ng-binding" type="button"  ng-disabled="personalInfoForm.$pristine || personalInfo.isUploading" ds-modal="preferences/common/saving-modal.html" data-qa="preferences-save-btn" disabled="disabled">
                Save
            </button>
            <button class="btn btn-minor ng-binding" type="button" >
                Cancel
            </button>
        </div>
    </div>

    <!-- side things -->
    <div class="grid section">
                    <div class="l-media">
                        <div class="l-media_image">
                           <span class="avatar avatar-xxlarge avatar-background ng-scope" >
                            </span>
                        </div>
                        <div class="l-media_body">
                            <div>
                                <strong data-qa="preferences-user-name" class="ng-binding">Sidra Tariq</strong>
                                <button type="button" class="link ng-scope ng-binding"  data-qa="edit-name" ds-analytics="preferences-pi-name">
                                    Edit
                                </button>
                            </div>

                            <div data-qa="preferences-user-email" class="ng-binding">sidratariq48@gmail.com
                                <span class="email-changed-alert colorSunglowYellow ng-binding ng-hide"  data-qa="email-change-submitted">
                                </span>
                            </div>
                            <div data-qa="preferences-account-name" class="ng-binding">
                                Account: sidra
                            </div>
                            <div>
                                <span  class="muted ng-binding ng-scope" data-qa="default-account">
                                    Default Account
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="m-top-x-small">
                        <button type="button" class="btn btn-primary btn-lg btn-trigger ng-scope ng-binding" olive-menu="profileImageUploader" data-qa="edit-photo-button" ds-analytics="preferences-pi-photo" olive-menu-trigger="profileImageUploader" olive-menu-initialized="true" aria-haspopup="true" aria-expanded="false">
                            Edit Photo
                        </button>
                        <div class="menu invisible menu-hidden" id="profileImageUploader" style="min-width: 120px;">
                            <ul role="menu" aria-label="
                            Edit Photo
                        ">
                                <li role="menuitem">
                                    <button type="button" class="item ng-binding"  data-qa="dropdown-upload-photo">
                                        Upload Photo
                                    </button>
                                </li>
                                <li ng-show="$props.hasAvatar" role="menuitem">
                                    <button type="button" class="item ng-binding"  data-qa="dropdown-delete-photo">
                                        Delete
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

    <!-- inputs and fun -->

    <div class="section">
                <div class="grid">
                    <h2 class="header-title ng-binding">
                        Company and Job Title
                    </h2>

                    <div class="col-2-5">
                        <div class="form-group" data-children-count="1">
                            <label class="label ng-binding" for="company">Company</label>
                            <input type="text" class="input-text ng-pristine ng-untouched ng-valid ng-not-empty" id="company" ng-model="personalInfo.companyName" data-qa="preferences-company-input" data-kwimpalastatus="alive" data-kwimpalaid="1551144858268-28">
                        </div>
                        <div class="form-group" data-children-count="1">
                            <label class="label ng-binding" for="jobtitle">Job Title</label>
                            <input type="text" class="input-text ng-pristine ng-valid ng-not-empty ng-touched" id="jobtitle" ng-model="personalInfo.jobTitle" data-qa="preferences-job-title-input" data-kwimpalastatus="alive" data-kwimpalaid="1551144858268-29">
                        </div>
                    </div>
                </div>
            </div>

    <div class="section">
                <div class="grid">
                    <h2 class="header-title ng-binding">
                        Address and Phone
                    </h2>
                    <div class="col-2-5">
                            <div ng-switch="" on="personalInfo.addressFormat">
                               <div ng-switch-default="" class="ng-scope">
                                <div class="ng-scope">
    
    </div>
                                 <div class="ng-scope">
    </div>
                                 <div  class="ng-scope">
    
    </div>
                                <div  class="ng-scope">
    <div class="form-group ng-scope" data-children-count="1">
        <label class="label ng-binding" for="phone">Phone
            <span class="text-muted ng-binding" data-children-count="0">(optional)</span>
        </label>
        <input type="text" class="input-text ng-pristine ng-untouched ng-valid ng-empty" id="phone"  data-kwimpalastatus="alive" data-kwimpalaid="1551144858268-33">
    </div>
    </div>
                                </div>
                            </div>
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
</template>

<script>
    import head_head from '../header/header.vue'

export default {
components:{
    head_head
}
}
</script>

<style scoped>

*{
    border: 1px solid black;
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

.l-media {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}

.l-media_body {
    -ms-flex-item-align: center;
    align-self: center;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
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
