/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
Meteor.methods({
	'facebook.revoke'() {
		if (!Meteor.userId()) {
			throw new Meteor.Error('invalid-user');
		}

		return Meteor.users.update(Meteor.userId(), {
			$unset: {
				'services.facebook': 1
			}
		}
		);
	}
});
