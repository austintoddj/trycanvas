/**
 * Copied from the hero and pasted into an agent that already has the Laravel app open.
 * Steps match the Canvas readme: require, install, admin on an existing user, then /canvas.
 */
export const installPrompt = `You are in a Laravel app. Install Canvas (https://github.com/austintoddj/canvas).

Canvas is a publishing platform. It uses this app's existing authentication and does not create users of its own.

Require PHP >= 8.3, Laravel >= 12, and a working auth guard (web by default). If those are missing, stop and say so.

Then:
1. composer require austintoddj/canvas
2. php artisan canvas:install
3. Pick an existing user and run: php artisan canvas:make-admin <their email>
4. Tell me to sign in and open /canvas.

Do not add a second user system. Do not run php artisan canvas:ui unless I ask. That command publishes an optional public blog at /canvas-ui.

If you change auth, config, or published files, follow https://github.com/austintoddj/canvas/blob/main/readme.md.`
