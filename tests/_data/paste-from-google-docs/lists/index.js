/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import nestedOrderedList from './nested-ordered-lists/input.html';
import nestedOrderedListNormalized from './nested-ordered-lists/normalized.html';
import nestedOrderedListModel from './nested-ordered-lists/model.html';

import mixedList from './mixed-list/input.html';
import mixedListNormalized from './mixed-list/normalized.html';
import mixedListModel from './mixed-list/model.html';

import repeatedlyNestedList from './repeatedly-nested-list/input.html';
import repeatedlyNestedListNormalized from './repeatedly-nested-list/normalized.html';
import repeatedlyNestedListModel from './repeatedly-nested-list/model.html';

import partiallySelected from './partially-selected/input.html';
import partiallySelectedNormalized from './partially-selected/normalized.html';
import partiallySelectedModel from './partially-selected/model.html';

export const fixtures = {
	input: {
		nestedOrderedList,
		mixedList,
		repeatedlyNestedList,
		partiallySelected
	},
	normalized: {
		nestedOrderedList: nestedOrderedListNormalized,
		mixedList: mixedListNormalized,
		repeatedlyNestedList: repeatedlyNestedListNormalized,
		partiallySelected: partiallySelectedNormalized
	},
	model: {
		nestedOrderedList: nestedOrderedListModel,
		mixedList: mixedListModel,
		repeatedlyNestedList: repeatedlyNestedListModel,
		partiallySelected: partiallySelectedModel
	}
};

export const browserFixtures = {};