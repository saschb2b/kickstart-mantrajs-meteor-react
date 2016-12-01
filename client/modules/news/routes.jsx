import React from 'react'
import { mount } from 'react-mounter'
import { MainLayout } from '../core/components/MainLayout'
import Toolbar from '../core/components/Toolbar'
import { NewsOverview } from './components/NewsOverview'
import { NewsDetailPage } from './components/NewsDetailPage'

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout)
  const NewsOverviewCtx = injectDeps(NewsOverview)

  const baseRoute = '/news'

  const newsRoutes = FlowRouter.group({
    prefix: '/news',
    name: 'news'
  })

  newsRoutes.route('/', {
    action() {
      mount(MainLayoutCtx, {
        toolbar: <Toolbar title="News" />,
        content: <NewsOverviewCtx />
      })
    }
  })

  newsRoutes.route('/:id', {
    action(params) {
      mount(MainLayoutCtx, {
        toolbar: <Toolbar title="NewsDetail" transparent redirect={baseRoute} />,
        content: <NewsDetailPage id={params.id} />
      })
    }
  })
}
