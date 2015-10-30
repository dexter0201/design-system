/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const Tabs = require('../../index.react');
const Menu = require('ui/components/dropdowns/index.react');
const Button = require('ui/components/buttons/index.react');
const SvgIcon = require('app_modules/ui/svg-icon');
const componentUtil = require('app_modules/ui/util/component');
const pf = componentUtil.prefix;

module.exports = (
<div className='demo-only' style={{height: '30rem'}}>
  <Tabs flavor="default">
    <Tabs.Item title="Item One" id="tab-default-1">
      <h2>Item One Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Two" id="tab-default-2">
      <h2>Item Two Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Three" id="tab-default-3">
      <h2>Item Three Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Four" id="tab-default-4">
      <h2>Item Four Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Five" id="tab-default-5">
      <h2>Item Five Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Six" id="tab-default-6">
      <h2>Item Six Content</h2>
    </Tabs.Item>
    <Tabs.Item title="Item Seven" id="tab-default-7">
      <h2>Item Seven Content</h2>
    </Tabs.Item>
    <Tabs.ItemOverflow title="More" id="tab-overflow" className={pf('dropdown-trigger')}>
      <a href="#" role="tab" tabindex="-1" aria-selected="false" aria-controls="tab-more" aria-haspopup="true">More
        <SvgIcon className={pf('button__icon button__icon--x-small')} sprite="utility" symbol="down" />
      </a>
      <Menu className={pf('dropdown--right')}>
        <Menu.List isSelectable={false}>
          <Menu.Item className={pf('has-icon-left')} href="#" aria-selected="true">
            Item Eight
            <SvgIcon className={pf('icon icon--small icon--left')} sprite="utility" symbol="table" />
          </Menu.Item>
          <Menu.Item className={pf('has-icon-left')} href="#">
            Item Nine
            <SvgIcon className={pf('icon icon--small icon--left')} sprite="utility" symbol="kanban" />
          </Menu.Item>
          <Menu.Item className={pf('has-icon-left')} href="#">
            Item Ten
            <SvgIcon className={pf('icon icon--small icon--left')} sprite="utility" symbol="side_list" />
          </Menu.Item>
          <Menu.Item className={pf('has-icon-left')} href="#">
            Item Eleven
            <SvgIcon className={pf('icon icon--small icon--left')} sprite="utility" symbol="table" />
          </Menu.Item>
          <Menu.Item className={pf('has-icon-left has-divider--bottom slds-has-divider--bottom-space')} href="#">
            Item Twelve
            <SvgIcon className={pf('icon icon--small icon--left')} sprite="utility" symbol="kanban" />
          </Menu.Item>
          <Menu.Item className={pf('has-icon-left')} href="#">
            Item Thirteen
            <SvgIcon className={pf('icon icon--small icon--left')} sprite="utility" symbol="side_list" />
          </Menu.Item>
          <Menu.Item className={pf('has-icon-left')} href="#">
            Item Fourteen
            <SvgIcon className={pf('icon icon--small icon--left')} sprite="utility" symbol="table" />
          </Menu.Item>
          <Menu.Item className={pf('has-icon-left')} href="#">
            Item Fifteen
            <SvgIcon className={pf('icon icon--small icon--left')} sprite="utility" symbol="kanban" />
          </Menu.Item>
          <Menu.Item className={pf('has-icon-left')} href="#">
            Item Sixteen
            <SvgIcon className={pf('icon icon--small icon--left')} sprite="utility" symbol="side_list" />
          </Menu.Item>
          <Menu.Item className={pf('has-icon-left')} href="#">
            Item Seventeen
            <SvgIcon className={pf('icon icon--small icon--left')} sprite="utility" symbol="table" />
          </Menu.Item>
          <Menu.Item className={pf('has-icon-left')} href="#">
            Item Eighteen
            <SvgIcon className={pf('icon icon--small icon--left')} sprite="utility" symbol="kanban" />
          </Menu.Item>
          <Menu.Item className={pf('has-icon-left')} href="#">
            Item Nineteen
            <SvgIcon className={pf('icon icon--small icon--left')} sprite="utility" symbol="side_list" />
          </Menu.Item>
        </Menu.List>
      </Menu>
    </Tabs.ItemOverflow>
  </Tabs>
</div>
);
