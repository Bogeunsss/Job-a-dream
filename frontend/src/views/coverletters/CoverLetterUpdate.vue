<template>
  <div class="p-5" style="">
    <label
      for="cvletter-title"
      class="ml-5 pl-1"
      style="font-size:large;color:gray"
      >제목:
    </label>
    <input
      type="text"
      id="cvletter-title"
      v-model="coverletterResult.title"
      placeholder=" 제목을 입력하세요"
      class="ml-1"
      style="border:2px solid gray; border-radius:4px;font-size:22.5px;"
    />
    <div class="mt-5 p-1 ml-5" style="width:90%;">
      <div style="">
        <label
          for="cvletter-subject"
          class="m-0"
          style="font-size:18px;color:gray"
          >자소서 항목 </label
        ><br />
        <input
          type="text"
          id="cvletter-subject"
          v-model="coverletterResult.subject"
          placeholder=" 자소서 항목을 입력하세요"
          class="w-100"
          style="border:2px solid gray; border-radius:4px;font-size:22.5px;
          "
        />
      </div>
      <div class="mt-3">
        <label
          for="cvletter-content"
          class="m-0"
          style="font-size:18px;color:gray;"
          >자소서 내용 </label
        ><br />
        <textarea
          name="cvletter-content"
          id=""
          v-model="coverletterResult.content"
          placeholder=" 내용을 입력하세요"
          style="border:3px solid gray;border-radius:5px;font-size:20px;width:100%;height:300px;"
        ></textarea>
      </div>
    </div>
    <div class="d-flex justify-content-center" style="">
      <div style="width:60%" class="mr-5">
        <b-form-tags
          v-model="coverletterResult.tag"
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
                placeholder="태그를 추가해보세요:)"
                class="form-control"
              ></b-form-input>
              <b-input-group-append>
                <b-button @click="addTag()" variant="secondary">추가</b-button>
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
    <div class="d-flex justify-content-center mt-5 ml-5" style="width:90%;">
      <v-btn
        class="mr-1 basic-btn"
        medium
        color="primary"
        dark
        @click="updateCV()"
        >수정완료</v-btn
      >
      <router-link class="text-decoration-none ml-1" to="/coverletters/list">
        <v-btn class="basic-btn" medium color="warning" dark>목록으로</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["coverletterResult"]),
  },
  methods: {
    ...mapActions(["getCoverletterResult", "updateCoverletter"]),
    updateCV() {
      let updatedCVData = {
        id: this.coverletterResult.id,
        title: this.coverletterResult.title,
        subject: this.coverletterResult.subject,
        content: this.coverletterResult.content,
        update_tag: this.coverletterResult.tag,
      };

      this.updateCoverletter(updatedCVData);
    },
  },
  created() {
    this.getCoverletterResult(this.$route.params.id);
  },
};
</script>

<style></style>
