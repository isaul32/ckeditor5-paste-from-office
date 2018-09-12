/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import VirtualTestEditor from '@ckeditor/ckeditor5-core/tests/_utils/virtualtesteditor';
import testUtils from '@ckeditor/ckeditor5-core/tests/_utils/utils';

import PasteFromOffice from '../src/pastefromoffice';
import { createDataTransfer } from './_utils/utils';

describe( 'Paste from Office plugin', () => {
	let editor, normalizeSpy;

	testUtils.createSinonSandbox();

	beforeEach( () => {
		return VirtualTestEditor
			.create( {
				plugins: [ Clipboard, PasteFromOffice ]
			} )
			.then( newEditor => {
				editor = newEditor;
				normalizeSpy = testUtils.sinon.spy( editor.plugins.get( 'PasteFromOffice' ), '_normalizeWordInput' );
			} );
	} );

	it( 'runs normalizations if Word meta tag detected #1', () => {
		const dataTransfer = createDataTransfer( {
			'text/html': '<meta name=Generator content="Microsoft Word 15">'
		} );

		editor.editing.view.document.fire( 'clipboardInput', { dataTransfer } );

		expect( normalizeSpy.calledOnce ).to.true;
	} );

	it( 'runs normalizations if Word meta tag detected #2', () => {
		const dataTransfer = createDataTransfer( {
			'text/html': '<html><head><meta name="Generator"  content=Microsoft Word 15></head></html>'
		} );

		editor.editing.view.document.fire( 'clipboardInput', { dataTransfer } );

		expect( normalizeSpy.calledOnce ).to.true;
	} );

	it( 'does not normalize the content without Word meta tag', () => {
		const dataTransfer = createDataTransfer( {
			'text/html': '<meta name=Generator content="Other">'
		} );

		editor.editing.view.document.fire( 'clipboardInput', { dataTransfer } );

		expect( normalizeSpy.called ).to.false;
	} );
} );