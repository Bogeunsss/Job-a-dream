import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import AudioList from '../views/audios/AudioList'
import AudioCreate from '../views/audios/AudioCreate'
import AudioDetail from '../views/audios/AudioDetail'
import CoverLetterList from '../views/coverletters/CoverLetterList'
import CoverLetterCreate from '../views/coverletters/CoverLetterCreate'
import CoverLetterDetail from '../views/coverletters/CoverLetterDetail'
import CoverLetterUpdate from '../views/coverletters/CoverLetterUpdate'
import FullCourseList from '../views/fullcourses/FullCourseList'
import FullCourseCreate from '../views/fullcourses/FullCourseCreate'
import FullCourseDetail from '../views/fullcourses/FullCourseDetail'
import VideoList from '../views/videos/VideoList'
import VideoCreate from '../views/videos/VideoCreate'
import VideoDetail from '../views/videos/VideoDetail'
import YoutubeList from '../views/youtubes/YoutubeList'
import YoutubeDetail from '../views/youtubes/YoutubeDetail'
import Result from '../views/results/Result'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/audios/list',
    name: 'AudioList',
    component: AudioList,
    meta: {
      title: '잡아드림 | 음성분석'
    }
  },
  {
    path: '/audios/create',
    name: 'AudioCreate',
    component: AudioCreate,
    meta: {
      title: '잡아드림 | 음성분석 시작'
    }
  },
  {
    path: '/audios/detail/:id',
    name: 'AudioDetail',
    component: AudioDetail,
    meta: {
      title: '잡아드림 | 음성분석 결과'
    }
  },
  {
    path: '/coverletters/list',
    name: 'CoverLetterList',
    component: CoverLetterList,
    meta: {
      title: '잡아드림 | 자소서분석'
    }
  },
  {
    path: '/coverletters/create',
    name: 'CoverLetterCreate',
    component: CoverLetterCreate,
    meta: {
      title: '잡아드림 | 자소서분석 시작'
    }
  },
  {
    path: '/coverletters/detail/:id',
    name: 'CoverLetterDetail',
    component: CoverLetterDetail,
    meta: {
      title: '잡아드림 | 자소서분석 결과'
    }
  },
  {
    path: '/coverletters/detail/:id/update',
    name: 'CoverLetterUpdate',
    component: CoverLetterUpdate,
    meta: {
      title: '잡아드림 | 자소서분석 수정'
    }
  },
  {
    path: '/fullcourses/list',
    name: 'FullCourseList',
    component: FullCourseList,
    meta: {
      title: '잡아드림 | 풀코스분석'
    }
  },
  {
    path: '/fullcourses/create',
    name: 'FullCourseCreate',
    component: FullCourseCreate,
    meta: {
      title: '잡아드림 | 풀코스분석 시작'
    }
  },
  {
    path: '/fullcourses/detail/:id',
    name: 'FullCourseDetail',
    component: FullCourseDetail,
    meta: {
      title: '잡아드림 | 풀코스분석 결과'
    }
  },
  {
    path: '/videos/list',
    name: 'VideoList',
    component: VideoList,
    meta: {
      title: '잡아드림 | 영상분석'
    }
  },
  {
    path: '/videos/create',
    name: 'VideoCreate',
    component: VideoCreate,
    meta: {
      title: '잡아드림 | 영상분석 시작'
    }
  },
  {
    path: '/videos/detail/:id',
    name: 'VideoDetail',
    component: VideoDetail,
    meta: {
      title: '잡아드림 | 영상분석 결과'
    }
  },
  {
    path: '/youtubes/list',
    name: 'YoutubeList',
    component: YoutubeList,
    meta: {
      title: '잡아드림 | 면접 참고 영상'
    }
  },
  {
    path: '/youtubes/detail/:id',
    name: 'YoutubeDetail',
    component: YoutubeDetail,
    meta: {
      title: '잡아드림 | 면접 참고 영상 보기'
    }
  },
  {
    path: '/results',
    name: 'Result',
    component: Result,
    meta: {
      title: '잡아드림 | 통계 및 분석'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '잡아드림'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '잡아드림';
  const isAuthenticated = store.getters.isLoggedIn;
  if (isAuthenticated) {
    next()
  } else if (to.name === 'LoginView' || to.name === 'SignupView') {
    next()
  } else {
    next({name: 'LoginView'})
  }
});

export default router
