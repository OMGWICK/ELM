<template>
  <div class="evalute">
    <score-rank :rating="comments.rating"></score-rank>
    <comments-tags :tags="comments.tags"></comments-tags>
    <comments-content :comments="comments.comments"></comments-content>
  </div>
</template>

<script>
import scoreRank from './scoreRank';
import commentsTags from './commentsTags';
import commentsContent from './commentsContent';
export default {
  props: {
    comments: {
      type: Object,
    },
  },
  components: {
    scoreRank,
    commentsTags,
    commentsContent,
  },
};
</script>

<style lang="less" scoped></style>
