/* eslint-disable */

import assert from 'assert';

import '@replace/path:path/posix';

/** @type {import('@types/sinon')} */
// const sinon = require("sinon");
import {Package} from '../../package.js';
import ManifestHelper from './helpers/manifest.js';

describe('Package.validateCCMod - returned id property', function() {

    beforeEach(() => {
        global.ig = {};
    });

    it('should be reported as broken if id is not a string', async () => {
        const testManifest = ManifestHelper.copy(false);
        testManifest.id = {};
        const manifest = await Package.validateCCMod(testManifest, 'a-mod');
        assert.strictEqual(Array.isArray(manifest.issues),true, 'manifest.issues is not an array!');
        assert.strictEqual(manifest.issues.length, 1);
        assert.strictEqual(manifest.issues[0], 'id does not match /^[a-zA-Z0-9_-]+$/');
    });

    it('should be reported as broken if id is empty', async () => {
        const testManifest = ManifestHelper.copy(false);
        testManifest.id = '';
        const manifest = await Package.validateCCMod(testManifest, 'a-mod');
        assert.strictEqual(Array.isArray(manifest.issues),true, 'manifest.issues is not an array!');
        assert.strictEqual(manifest.issues.length, 1);
        assert.strictEqual(manifest.issues[0], 'id does not match /^[a-zA-Z0-9_-]+$/');
    });

    it('should be reported as broken if id is invalid', async () => {
        const testManifest = ManifestHelper.copy(false);
        testManifest.id = '!';
        const manifest = await Package.validateCCMod(testManifest, 'a-mod');
        assert.strictEqual(Array.isArray(manifest.issues),true, 'manifest.issues is not an array!');
        assert.strictEqual(manifest.issues.length, 1);
        assert.strictEqual(manifest.issues[0], 'id does not match /^[a-zA-Z0-9_-]+$/');
    });
    
});

