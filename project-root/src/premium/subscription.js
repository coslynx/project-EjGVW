const subscription = {
  premiumFeatures: [
    'ad-free listening',
    'access to exclusive playlists',
    'custom playlists creation',
    'subscription management interface'
  ],
  userSubscriptionStatus: {
    isPremium: false,
    subscriptionType: '',
    subscriptionEndDate: null
  },
  
  checkSubscriptionStatus() {
    if (this.userSubscriptionStatus.isPremium) {
      console.log('User is a premium member');
      console.log(`Subscription type: ${this.userSubscriptionStatus.subscriptionType}`);
      console.log(`Subscription end date: ${this.userSubscriptionStatus.subscriptionEndDate}`);
    } else {
      console.log('User is not a premium member');
    }
  },
  
  upgradeSubscription(newSubscriptionType, newEndDate) {
    this.userSubscriptionStatus.isPremium = true;
    this.userSubscriptionStatus.subscriptionType = newSubscriptionType;
    this.userSubscriptionStatus.subscriptionEndDate = newEndDate;
    console.log('Subscription upgraded successfully');
  },
  
  renewSubscription(newEndDate) {
    if (this.userSubscriptionStatus.isPremium) {
      this.userSubscriptionStatus.subscriptionEndDate = newEndDate;
      console.log('Subscription renewed successfully');
    } else {
      console.log('User is not a premium member. Cannot renew subscription');
    }
  },
  
  cancelSubscription() {
    this.userSubscriptionStatus.isPremium = false;
    this.userSubscriptionStatus.subscriptionType = '';
    this.userSubscriptionStatus.subscriptionEndDate = null;
    console.log('Subscription cancelled successfully');
  }
};

module.exports = subscription;