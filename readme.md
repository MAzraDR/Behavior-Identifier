# Behavior Identifier

A scenario-based test that evaluates how users react in different situations based on relationship, place, and emotional context.

This project uses a dynamic question generator and a scoring system to determine user behavior patterns such as passive, normal, aggressive, or chaotic.

## Settings

### 1. Relationship

    - Parent/Family
    - Partner
    - Friend
    - Stranger

### 2. Place

    - Workplace
    - School
    - Public space
    - Social media
    - Home

### 3. Situation

    - Joyous
    - Neutral
    - Sadness
    - Depressed

## Scenario Rules

-   Parent/Family => School, public space, home => {situation}
-   Partner => Workplace, school, public space, home => {situation}
-   Friend => Workplace, school, public space, home => {situation}
-   Stranger => workplace, school, public space, social media => {situation}

<br>

# Scoring System

Each answer represents a **behavior type :**

| Choice | Behavior   | Meaning                        | Score |
| ------ | ---------- | ------------------------------ | ----- |
| A      | Passive    | Avoids everything              | +1    |
| B      | Normal     | Balanced / socially acceptable | 0     |
| C      | Aggressive | Confrontational / rude         | +2    |
| D      | Chaotic    | Makes things worse / reckless  | +3    |

## Situation Multiplier

| Situation | Behavior   | Multiplier | Reason                         |
| --------- | ---------- | ---------- | ------------------------------ |
| Joyous    | Passive    | 0.5        | Ruins the vibe by being boring |
|           | Normal     | 0          | Perfectly fine behavior        |
|           | Aggressive | 1.5        | Kills the mood                 |
|           | Chaotic    | 2          | Turns fun into disaster        |
| Neutral   | Passive    | 1          | Slightly useless               |
|           | Normal     | 0          | Expected behavior              |
|           | Aggressive | 2          | Unnecessary escalation         |
|           | Chaotic    | 2.5        | Makes normal situation weird   |
| Sadness   | Passive    | 1.5        | Ignoring sadness = bad         |
|           | Normal     | 0          | Correct response               |
|           | Aggressive | 2.5        | Makes things worse             |
|           | Chaotic    | 3          | Emotionally destructive        |
| Depressed | Passive    | 2          | Very bad (neglect)             |
|           | Normal     | 0          | Ideal behavior                 |
|           | Aggressive | 3          | Harmful                        |
|           | Chaotic    | 4          | Maximum damage                 |

## Relationship Weight

| Relationship | Weight |
| ------------ | ------ |
| Stranger     | x1     |
| Friend       | x1.2   |
| Partner      | x1.5   |
| Family       | x1.5   |

### Calculating Formula

```
Score = Base Score × Situation Multiplier × Relationship Weight
```

# Final Result Output

The result is determined by combining:

-   Total score
-   Dominant behavior


Example Result (will change later):

| Condition          | Result Description                             |
| ------------------ | ---------------------------------------------- |
| Low Score + Normal | “Functioning human. Boring, but safe.”         |
| Medium + Passive   | “You avoid problems so hard they multiply.”    |
| High + Aggressive  | “You don’t solve problems. You escalate them.” |
| High + Chaotic     | “You are not the problem. You are the event.”  |
