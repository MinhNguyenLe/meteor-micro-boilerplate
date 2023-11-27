import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

const slingshotConfig = () => {
  const size64KB = 64 * 1024; // 64 KB
  const size128KB = 128 * 1024; // 128 KB

  // At the present just use AWS S3Storage
  function declareDirective({
    key,
    fileRestrictionsOptions,
    createDirectiveOptions,
  }: {
    key: string;
    fileRestrictionsOptions: any;
    createDirectiveOptions: Partial<Slingshot.IS3Storage['directiveMatch']>;
  }) {
    Slingshot.fileRestrictions(key, fileRestrictionsOptions);
    Slingshot.createDirective(key, Slingshot.S3Storage, createDirectiveOptions);
  }

  declareDirective({
    key: 'avatarUploads',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: size64KB,
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.AWS_SECRET_KEY,
      bucket: Meteor.settings.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',
      authorize() {
        return true;
      },
      key() {
        return `avatarUploads/${Random.id()}`;
      },
    },
  });

  declareDirective({
    key: 'notificationImages',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: size128KB,
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.AWS_SECRET_KEY,
      bucket: Meteor.settings.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',
      authorize() {
        return true;
      },
      key() {
        return `notificationImages/${Random.id()}`;
      },
    },
  });

  declareDirective({
    key: 'grocery/store',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: size64KB,
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.GROCERY.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.GROCERY.AWS_SECRET_KEY,
      bucket: Meteor.settings.GROCERY.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',
      authorize() {
        return true;
      },
      key() {
        return `grocery/store/${Random.id()}`;
      },
    },
  });

  declareDirective({
    key: 'grocery/product',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: Meteor.settings.GROCERY.PRODUCT_IMAGE_SIZE,
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.GROCERY.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.GROCERY.AWS_SECRET_KEY,
      bucket: Meteor.settings.GROCERY.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',
      authorize() {
        return true;
      },
      key() {
        return `grocery/product/${Random.id()}`;
      },
    },
  });

  /* --------------------- BREWARD FOR ASKER BANNER IMAGE --------------------- */
  declareDirective({
    key: 'Asker-bReward',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: size64KB,
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.GROCERY.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.GROCERY.AWS_SECRET_KEY,
      bucket: Meteor.settings.GROCERY.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',
      authorize() {
        return true;
      },
      key(_, metaContext) {
        const { country, partner = 'btaskee' } = metaContext;
        return `bRewards/ASKER/${country}/${partner}/banner/${Random.id()}`;
      },
    },
  });

  /* --------------------- BREWARD FOR TASKER BANNER IMAGE -------------------- */
  declareDirective({
    key: 'Tasker-bReward',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: size64KB,
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.GROCERY.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.GROCERY.AWS_SECRET_KEY,
      bucket: Meteor.settings.GROCERY.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',
      authorize() {
        return true;
      },
      key(_, metaContext) {
        const { country, partner = 'btaskee' } = metaContext;
        return `bRewards/TASKER/${country}/${partner}/banner/${Random.id()}`;
      },
    },
  });

  /* --------------------- BRAND LOGO FOR ASKER'S BREWARD --------------------- */
  declareDirective({
    key: 'asker-logo-brand',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: size64KB,
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.GROCERY.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.GROCERY.AWS_SECRET_KEY,
      bucket: Meteor.settings.GROCERY.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',
      authorize() {
        return true;
      },
      key(_, metaContext) {
        const { country, partner = 'btaskee' } = metaContext;
        return `bRewards/ASKER/${country}/${partner}/brand-logo/${Random.id()}`;
      },
    },
  });

  /* --------------------- BRAND LOGO FOR TASKER'S BREWARD --------------------- */
  declareDirective({
    key: 'tasker-logo-brand',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: size64KB,
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.GROCERY.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.GROCERY.AWS_SECRET_KEY,
      bucket: Meteor.settings.GROCERY.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',
      authorize() {
        return true;
      },
      key(_, metaContext) {
        const { country, partner = 'btaskee' } = metaContext;
        return `bRewards/TASKER/${country}/${partner}/brand-logo/${Random.id()}`;
      },
    },
  });

  declareDirective({
    key: 'campaign/image',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: size64KB,
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.GROCERY.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.GROCERY.AWS_SECRET_KEY,
      bucket: Meteor.settings.GROCERY.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',
      authorize() {
        return true;
      },
      key(_, metaContext) {
        const { country, startDate } = metaContext;
        return `campaign/${country}/${startDate}/${Random.id()}`;
      },
    },
  });

  declareDirective({
    key: 'category/iconForV3',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: size64KB,
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.GROCERY.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.GROCERY.AWS_SECRET_KEY,
      bucket: Meteor.settings.GROCERY.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',
      authorize() {
        return true;
      },
      key(file) {
        return `campaigns/app-icons/${file.name}`;
      },
    },
  });

  /* --------------------- LOGO SYSTEM FOR ASKER'S BREWARD -------------------- */
  declareDirective({
    key: 'asker-logo-system',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: size64KB,
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.GROCERY.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.GROCERY.AWS_SECRET_KEY,
      bucket: Meteor.settings.GROCERY.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',
      authorize() {
        return true;
      },
      key(_, metaContext) {
        const { country } = metaContext;
        return `bRewards/ASKER/${country}/logo-system/${Random.id()}`;
      },
    },
  });

  /* --------------------- LOGO SYSTEM FOR TASKER'S BREWARD -------------------- */
  declareDirective({
    key: 'tasker-logo-system',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: size64KB,
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.GROCERY.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.GROCERY.AWS_SECRET_KEY,
      bucket: Meteor.settings.GROCERY.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',
      authorize() {
        return true;
      },
      key(_, metaContext) {
        const { country } = metaContext;
        return `bRewards/TASKER/${country}/logo-system/${Random.id()}`;
      },
    },
  });

  /* ------------------------- IMAGE REFERRAL CAMPAIGN ------------------------- */
  declareDirective({
    key: 'asker-banner-referral-setting',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: 64 * 1024, // 64KB
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.GROCERY.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.GROCERY.AWS_SECRET_KEY,
      bucket: Meteor.settings.GROCERY.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',

      authorize() {
        return true;
      },

      key() {
        return `asker/referral-setting/banner/${Random.id()}`;
      },
    },
  });
  /* ------------------------- IMAGE TASKER CAMPAIGN ------------------------- */
  declareDirective({
    key: 'tasker-banner-campaign',
    fileRestrictionsOptions: {
      allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
      maxSize: 64 * 1024, // 64KB
    },
    createDirectiveOptions: {
      AWSAccessKeyId: Meteor.settings.GROCERY.AWS_ACCESS_KEY_ID,
      AWSSecretAccessKey: Meteor.settings.GROCERY.AWS_SECRET_KEY,
      bucket: Meteor.settings.GROCERY.AWS_BUCKET,
      acl: 'public-read',
      region: 'ap-southeast-1',

      authorize() {
        return true;
      },

      key() {
        return `tasker/campaign/banner/${Random.id()}`;
      },
    },
  });
};

export default slingshotConfig;
