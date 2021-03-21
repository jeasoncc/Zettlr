/**
 * @ignore
 * BEGIN HEADER
 *
 * Contains:        About window entry file
 * CVM-Role:        <none>
 * Maintainer:      Hendrik Erz
 * License:         GNU GPL v3
 *
 * Description:     This file is the tag manager's procedural file.
 *                  It is the main entry point for the window. It simply loads
 *                  the renderer process and initialises everything.
 *
 * END HEADER
 */

import windowRegister from '../common/modules/window-register'
import Vue from 'vue'
import About from './About.vue'
import { ipcRenderer } from 'electron'

// Create the Vue app because we need to reference it in our toolbar controls
const app = new Vue(About)

windowRegister()

// This window will be closed immediately on a window-close command
ipcRenderer.on('shortcut', (event, shortcut) => {
  if (shortcut === 'close-window') {
    ipcRenderer.send('window-controls', { command: 'win-close' })
  }
})

// In the end: mount the app onto the DOM
app.$mount('#app')
