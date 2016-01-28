/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import svg4everybody from 'app_modules/site/vendor/svg4everybody';

import { logPageVisit } from './analytics';
import { drainEventQueue } from './events';
import { $, delegate, globals, setClassName } from './helpers';

// Log the current page as an event in GA/LL
logPageVisit();

// NOTE: This module has been shimmed
// to support passing in a custom document
svg4everybody(document);

// Left Nav
delegate('click', '[data-slds-nav-children] > a', (event, node) => {
  event.preventDefault();
  const isOpen = /is-open/.test(node.parentNode.className);
  setClassName(node.parentNode, {
    [`${globals.cssPrefix}is-open`]: !isOpen,
    'is-closed': isOpen
  });
});

// Analytics
delegate('click', '[data-slds-cta-event]', (event, node) => {
  let values = {};
  try {
    values = JSON.parse(node.getAttribute('data-slds-cta-event-values'));
  } catch (e) {}
  logCTAEvent(
    node.getAttribute('data-slds-cta-event-name'),
    node.getAttribute('data-slds-cta-event-type'),
    values
  );
});
