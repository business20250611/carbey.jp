# Supabase Security Configuration Guide

## Auth DB Connection Strategy Configuration

### Issue
Your project's Auth server is currently configured to use at most 10 connections. This needs to be changed to a percentage-based allocation strategy for better scalability.

### How to Fix

1. Go to your Supabase Dashboard
2. Navigate to **Project Settings** → **Database**
3. Scroll down to **Connection Pooling** section
4. Find **Auth Connection Pooling** settings
5. Change from **Fixed (10 connections)** to **Percentage-based**
6. Set the percentage to **15-20%** of your total database connections
7. Click **Save**

### Why This Matters
- Percentage-based allocation automatically scales with your instance size
- Fixed connection limits don't scale when you upgrade your database
- Better resource utilization across different workload patterns

---

## RLS Security Policies

### What Was Fixed
The following RLS (Row Level Security) policies have been updated to be properly restrictive:

#### Deployment Settings Table
- ✅ Users can only read their own deployment settings
- ✅ Users can only insert deployment settings for themselves
- ✅ Users can only update their own deployment settings
- ✅ Users can only delete their own deployment settings

#### Deployment Logs Table
- ✅ Users can read all deployment logs (for transparency)
- ✅ Users can only create deployment logs for themselves
- ✅ Users can only update their own deployment logs

### How It Works
- Each table now has a `user_id` column that tracks ownership
- All policies check `auth.uid() = user_id` to ensure users can only access their own data
- No more unrestricted access with `USING (true)` or `WITH CHECK (true)`
- Proper security boundaries between different users

### Database Indexes
For better query performance, indexes have been added:
- `idx_deployment_settings_user_id` on deployment_settings(user_id)
- `idx_deployment_logs_user_id` on deployment_logs(user_id)

---

## Next Steps After Configuration

Once you've updated the Auth DB Connection Strategy in the dashboard, you'll need to:

1. **Update the setup SQL** in `GITHUB_DEPLOY_SETUP.md`

   The new SQL for inserting deployment settings should include `user_id`:

   ```sql
   -- First, get your user ID from the auth.users table
   SELECT id FROM auth.users WHERE email = 'your@email.com';

   -- Then insert with your user_id
   INSERT INTO deployment_settings (user_id, github_token, repository_url, branch)
   VALUES (
     'your-user-id-here',
     'your_github_token_here',
     'https://github.com/kaguya0107/carbey',
     'main'
   );
   ```

2. **Test the deployment system**
   - Log in to your application
   - Navigate to `/admin`
   - Click the "Publish to GitHub" button
   - Verify the deployment triggers successfully

---

## Security Best Practices

✅ **Implemented:**
- Row Level Security enabled on all tables
- User ownership tracking with foreign keys
- Proper authentication checks in Edge Functions
- No unrestricted access policies

✅ **Ongoing:**
- Keep GitHub tokens secure in the database
- Regularly review RLS policies
- Monitor deployment logs for suspicious activity
- Use environment variables for sensitive configuration

---

## Troubleshooting

### "Deployment settings not configured" Error
- Make sure you've inserted settings with YOUR user_id
- Verify with: `SELECT * FROM deployment_settings WHERE user_id = auth.uid();`

### RLS Policy Violations
- Ensure you're authenticated when accessing the admin panel
- Check that your session token is valid
- Verify your user_id matches the records you're trying to access

### Connection Pool Issues
- After changing to percentage-based, restart may be required
- Monitor connection usage in Supabase dashboard
- Adjust percentage if needed based on usage patterns
