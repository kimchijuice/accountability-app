# 🎯 Project Accountability App

A gamified accountability app that helps you stick to your projects through AI-powered coaching, smart scheduling, and gamification.

## 🌟 Features

### ✅ Current MVP Features
- **Smart Project Setup**: 4-step onboarding with AI-generated questions based on project type
- **Calendar Integration**: Analyzes your Google Calendar to suggest realistic time slots
- **Gamified Progress**: XP points, streaks, and visual progress tracking
- **AI Check-ins**: Personalized reflection questions when you complete sessions
- **Sticker Rewards**: Unlock themed sticker packs for completing projects
- **Scrapbook Design**: Customize your personal page with earned stickers

### 🚀 Planned Features
- Real Claude API integration for dynamic questions
- Google Calendar API for actual schedule analysis
- Make.com automations for notifications
- Pixel art design system
- Artist collaboration for sticker packs
- Voice input for check-ins
- Smart notification timing

## 🛠️ Tech Stack

**Frontend:**
- HTML5, CSS3, JavaScript (Vanilla)
- Mobile-first responsive design
- CSS animations and transitions

**Planned Backend:**
- Python (Flask/FastAPI)
- SQLite/PostgreSQL database
- Claude API integration
- Google Calendar API
- Make.com webhooks

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd accountability-app
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Run with Live Server**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server"

4. **Start Testing**
   - Click "+ New Project" to experience the setup flow
   - Try the existing projects to see check-in system
   - Explore sticker collection and page design

## 📁 File Structure

```
accountability-app/
├── index.html          # Main app structure
├── styles.css          # All styling and animations
├── script.js           # App logic and interactions
└── README.md           # This file
```

## 🎮 How It Works

### 1. Project Setup Flow
- **Step 1**: Enter project name and category
- **Step 2**: AI asks category-specific questions about timeline and commitment
- **Step 3**: Calendar analysis suggests optimal time slots
- **Step 4**: Psychology-based integration questions and final setup

### 2. Daily Workflow
- **Start Session**: Begin working on your project
- **Check Out**: AI asks personalized reflection questions
- **Earn XP**: Get points for consistency and insights
- **Build Streaks**: Maintain momentum with daily check-ins

### 3. Rewards System
- Complete projects to unlock themed sticker packs
- Design your personal scrapbook page
- Track progress with visual indicators

## 🧠 AI Integration Points

The app is designed with clear integration points for Claude API:

### Smart Questions
```javascript
// Example API call structure
const response = await fetch('/api/generate-question', {
  method: 'POST',
  body: JSON.stringify({
    projectType: 'coding',
    userHistory: previousResponses,
    currentStreak: 7,
    timeWorked: '2 hours'
  })
});
```

### Calendar Analysis
```javascript
// Google Calendar + Claude analysis
const analysis = await analyzeSchedule({
  calendarEvents: googleCalendarData,
  projectRequirements: projectData,
  userPreferences: userSettings
});
```

## 🎨 Design Philosophy

### Psychology-First Approach
- **Seamless Integration**: Feels like natural reflection, not extra work
- **Realistic Planning**: AI helps set achievable goals based on actual schedule
- **Positive Reinforcement**: Celebrates progress instead of punishing failures
- **Personal Expression**: Sticker rewards allow creative self-expression

### Gamification That Works
- **Meaningful Rewards**: Stickers unlock only after real accomplishment
- **Progress Visualization**: Clear feedback on advancement
- **Streak Psychology**: Builds habit formation without punishment
- **Social Elements**: Shareable scrapbook pages (future feature)

## 🔧 Development Roadmap

### Phase 1: MVP Testing (Current)
- [x] Core UI and user flow
- [x] Project setup simulation
- [x] Basic gamification
- [x] Sticker reward system
- [ ] User testing and feedback

### Phase 2: Backend Integration
- [ ] Python backend setup
- [ ] Claude API integration
- [ ] Google Calendar API
- [ ] User authentication
- [ ] Data persistence

### Phase 3: Automation & Enhancement
- [ ] Make.com workflow automation
- [ ] Smart notification timing
- [ ] Voice input for check-ins
- [ ] Progress analytics
- [ ] Export/sharing features

### Phase 4: Polish & Scale
- [ ] Pixel art design system
- [ ] Artist sticker pack collaborations
- [ ] Social features
- [ ] Mobile app version
- [ ] Team/group accountability

## 🧪 Testing the Prototype

### Core Flows to Test
1. **New Project Setup**
   - Click "+ New Project"
   - Complete all 4 steps
   - Notice how questions adapt to your category choice

2. **Daily Check-ins**
   - Click "Check Out" on any project
   - See AI-generated reflection questions
   - Experience the celebration flow

3. **Sticker System**
   - Explore "📦 Sticker Collection"
   - Try "✨ Design Page" mode
   - See how rewards tie to completed projects

### Things to Evaluate
- Does the setup flow feel natural and helpful?
- Are the AI questions engaging or annoying?
- Is the gamification motivating or distracting?
- Would you actually use this daily?

## 🤝 Contributing

This is currently a solo project in MVP stage. Feedback and suggestions are welcome!

### Feedback Areas
- User experience and flow
- Gamification balance
- AI question quality
- Visual design preferences
- Feature priorities

## 📝 Notes

### Current Limitations
- All data is temporary (resets on refresh)
- AI questions are pre-written samples
- Calendar integration is simulated
- No backend persistence

### Future Considerations
- Privacy-first approach for personal data
- Offline functionality for check-ins
- Integration with existing productivity tools
- Accessibility improvements
- Performance optimization

## 📄 License

[Add your chosen license here]

## 🙋‍♂️ Contact

[Add your contact information]

---

**Built with the belief that accountability should feel supportive, not stressful.**