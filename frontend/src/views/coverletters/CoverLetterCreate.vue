<template>
  <div class="m-5">
    <div v-if="!isLoaded">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1"
            >STEP 1. 자기소개서 입력</v-stepper-step
          >
          <v-divider></v-divider>
          <v-stepper-step step="2">STEP 2. 정보 입력</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <h3 class="text-center m-4">자기소개서를 입력해주세요.</h3>
            <v-card class="mx-auto" max-width="700" min-height="300" tile>
              <div class="w-100 d-flex flex-column align-items-center">
                <label for="input-with-list1" class="mt-5">항목</label>
                <b-form-input
                  class="w-50"
                  list="input-list1"
                  id="input-with-list"
                  type="text"
                  placeholder="항목을 입력해주세요."
                  v-model="coverletterData.subject"
                ></b-form-input>
              </div>
              <div class="w-100 d-flex flex-column align-items-center">
                <label for="input-with-list2" class="mt-5">내용</label>
                <b-form-textarea
                  class="w-50"
                  list="input-list2"
                  id="input-with-list"
                  type="text"
                  placeholder="내용을 입력해주세요."
                  v-model="coverletterData.content"
                ></b-form-textarea>
              </div>
            </v-card>
            <div class="w-100 d-flex flex-column">
              <v-btn
                v-if="coverletterData.subject && coverletterData.content"
                class="basic-btn align-self-center m-4 w-25"
                color="primary"
                @click="e1 = 2"
                >다음</v-btn
              >
              <v-btn
                v-else
                class="basic-btn align-self-center m-4 w-25"
                color="primary"
                depressed
                disabled
                >다음</v-btn
              >
            </div>
          </v-stepper-content>
          <v-stepper-content step="2">
            <h3 class="text-center m-4">정보를 입력해주세요.</h3>
            <v-card
              class="mx-auto d-flex flex-column justify-content-center"
              max-width="700"
              min-height="300"
              tile
            >
              <div class="w-100 d-flex flex-column align-items-center">
                <label for="input-with-list" class="mt-5">제목</label>
                <b-form-input
                  class="w-50"
                  list="input-list"
                  id="input-with-list"
                  type="text"
                  placeholder="제목을 입력해주세요."
                  v-model="coverletterData.title"
                ></b-form-input>
              </div>
              <div class="w-100 d-flex flex-column align-items-center">
                <label class="mt-5">태그</label>
                <div class="w-50">
                  <b-form-tags
                    v-model="coverletterData.update_tag"
                    no-outer-focus
                    class="mb-2"
                  >
                    <template
                      v-slot="{
                        tags,
                        inputAttrs,
                        inputHandlers,
                        tagVariant,
                        addTag,
                        removeTag,
                      }"
                    >
                      <b-input-group class="mb-2">
                        <b-form-input
                          v-bind="inputAttrs"
                          v-on="inputHandlers"
                          placeholder="태그를 추가해주세요."
                          class="form-control"
                        ></b-form-input>
                        <b-input-group-append>
                          <b-button @click="addTag()" variant="secondary"
                            >추가</b-button
                          >
                        </b-input-group-append>
                      </b-input-group>
                      <div class="d-inline-block" style="font-size: 1.5rem;">
                        <b-form-tag
                          v-for="tag in tags"
                          @remove="removeTag(tag)"
                          :key="tag"
                          :title="tag"
                          :variant="tagVariant"
                          class="mr-1"
                          style="font-family: 'Cute Font', cursive;"
                          >{{ tag }}</b-form-tag
                        >
                      </div>
                    </template>
                  </b-form-tags>
                </div>
              </div>
            </v-card>
            <div class="w-100 d-flex flex-column">
              <v-btn
                v-if="coverletterData.title && coverletterData.update_tag"
                class="basic-btn align-self-center m-4 w-25 text-white"
                color="cyan"
                @click="loadingBeforeCreate(coverletterData)"
                >완료</v-btn
              >
              <v-btn
                v-else
                class="basic-btn align-self-center m-4 w-25"
                color="primary"
                depressed
                disabled
                >완료</v-btn
              >
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>

    <div v-if="isLoaded" class="d-flex flex-column align-items-center">
      <div class="loading-icon" style="margin-top:185px;">
        <i class="fas fa-circle-notch fa-spin fa-8x"></i>
      </div>
      <div class="loading-icon-text" style="font-size:x-large;">분석중..</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CoverletterCreate",
  data() {
    return {
      coverletterData: {
        title: "",
        subject: "",
        content: "",
        update_tag: [],
      },
      e1: 1,
      isLoaded: false,
    };
  },
  methods: {
    ...mapActions(["createCoverletter"]),
    loadingBeforeCreate(cvData) {
      this.isLoaded = true;
      this.createCoverletter(cvData);
    },
  },
};
</script>

<style></style>
