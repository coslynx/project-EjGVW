const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/User');
const Playlist = require('../models/Playlist');
const Subscription = require('../models/Subscription');

router.get('/user/:userId/profile', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/user/:userId/profile', async (req, res) => {
  try {
    const userId = req.params.userId;
    const { avatar, bio } = req.body;
    
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    user.avatar = avatar;
    user.bio = bio;
    
    await user.save();
    
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/user/:userId/playlists', async (req, res) => {
  try {
    const userId = req.params.userId;
    const playlists = await Playlist.find({ user: userId });
    
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/user/:userId/playlists', async (req, res) => {
  try {
    const userId = req.params.userId;
    const { name, songs } = req.body;
    
    const playlist = new Playlist({
      name,
      songs,
      user: userId
    });
    
    await playlist.save();
    
    res.json({ message: 'Playlist created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/user/:userId/subscriptions', async (req, res) => {
  try {
    const userId = req.params.userId;
    const subscriptions = await Subscription.find({ user: userId });
    
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/user/:userId/subscriptions', async (req, res) => {
  try {
    const userId = req.params.userId;
    const { type, expiresAt } = req.body;
    
    const subscription = new Subscription({
      type,
      expiresAt,
      user: userId
    });
    
    await subscription.save();
    
    res.json({ message: 'Subscription created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;