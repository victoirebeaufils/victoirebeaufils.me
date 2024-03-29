/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min.js'

import React from 'react';
import {AnimatePresence} from 'framer-motion';
export const wrapPageElement = ({element}) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);