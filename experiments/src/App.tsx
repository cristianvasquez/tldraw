import * as React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Export from '~export'
import IFrame from '~iframe'
import Api from './api'
import ApiControl from './api-control'
import Basic from './basic'
import Develop from './develop'
import ReadOnly from './readonly'
import './styles.css'

const pages: ({ path: string; component: any; title: string } | '---')[] = [
  { path: '/develop', component: Develop, title: 'Develop' },
  '---',
  { path: '/basic', component: Basic, title: 'Basic' },
  { path: '/api', component: Api, title: 'Using the TldrawApp API' },
  { path: '/readonly', component: ReadOnly, title: 'Readonly mode' },
  { path: '/imperative', component: ApiControl, title: 'Controlled via the TldrawApp API' },
  { path: '/export', component: Export, title: 'Export' },

  { path: '/iframe', component: IFrame, title: 'IFrame' },
]

export default function App() {
  return (
    <main>
      <Routes>
        {pages.map((page) =>
          page === '---' ? null : (
            <Route key={page.path} path={page.path} element={<page.component />} />
          )
        )}

        <Route
          path="/"
          element={
            <div>
              <ul className="links">
                {pages.map((page, i) =>
                  page === '---' ? (
                    <hr key={i} />
                  ) : (
                    <li key={i}>
                      <Link to={page.path}>{page.title}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          }
        />
      </Routes>
    </main>
  )
}
