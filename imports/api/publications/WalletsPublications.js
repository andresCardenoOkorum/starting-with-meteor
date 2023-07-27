import { Meteor } from 'meteor/meteor';
import { WalletsCollection } from '../collections/WalletsCollection.js';

Meteor.publish('wallets', function publishWallets() {
  return WalletsCollection.find();
});