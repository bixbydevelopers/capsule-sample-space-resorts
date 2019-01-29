## Use cases

### Find Flow

#### Outer Queries
You can see all trained utterances and plans by entering this query in the training tab search bar: `goal:FindSpaceResorts -has:continue`. Examples:
- Find space resorts
- Show me space hotels with crater canyoneering
- Search for hotels around The Red Planet
- Look for space hotels with quantum bungee jumping around Saturn

We train these to have the goal `FindSpaceResorts` and we annotate any resort names, planets and search criteria as Values. 

Why do we set the goal to `FindSpaceResorts` Action instead of the `SpaceResort` Structure?

When the user wants to book a space resort and there were many possible candidates in context, we have a Selection Prompt to ask the user to pick a single one in order to pursue with the booking (see Selection Prompt section below for full details).
The context for that prompt is `SpaceResort`, and **Selection Prompt training must always have the same goal as its context**. 
Thus the Selection Prompt will definitely need to use `SpaceResort` as its goal. 
Since the Selection Prompt also uses different annotations patterns compared to these outer "find" queries and **annotation patterns must be consistent for the same goal**, this means that these outer "find" queries cannot use `SpaceResort` as the goal. 
Instead, we use the more specific Action `FindSpaceResort` as the goal for these outer "find" queries. 
This makes it very clear how to fulfill the request and provides consistent annotation patterns per goal.

#### Inner Queries (Continuations)
You can see all trained utterances and plans by entering this query in the training tab search bar: `goal:FindSpaceResorts continue:FindSpaceResorts`. Examples:
- On Jupiter
- With low gravity
- Only the ones that are kid-friendly

These are continuations of the outer "find" queries that allow users to refine their space resorts search by providing additional inputs.
Since the goal for outer "find" queries is `FindSpaceResorts`, se annotate both the goal and the "Continuation of" to also be `FindSpaceResorts`. 
We annotate any resort names, planets and search criteria as Values. 

### Property Projection Flows

#### Outer Property Projections
You can see all trained utterances and plans by entering this query in the training tab search bar: `goal:SpaceResort#* -has:continue`. For example:
- What's the gravity at The Mercurial?
- Where is Io-Tel?

Here the user is asking to know about a specific property of a space resort, such as the gravity or the planet. 
We train the goal to be that property projection, for example `SpaceResort#gravity` and we annotate any resort names, planets and search criteria as Values. 
We also add a special flagged signal route to `ProjectResort`. 
This is in case there were multiple space resorts that matched the search inputs, in which case this `ProjectResort` Action will ask the user to select a single space resort before providing the answer.

#### Inner Property Projections
You can see all trained utterances and plans by entering this query in the training tab search bar: `goal:SpaceResort#* continuation:SpaceResort`. For example:
- What's the gravity there?
- What planet is it on?

We train these just like the outer property projections, with the addition of a "Continuation of" `SpaceResort`. This allow pivoting between inner/outer "find" queries and inner/outer property projections.

### Book Flow

#### Outer Queries
You can see all trained utterances and plans by entering this query in the training tab search bar: `goal:Order#commitOrder -has:continue`. For example:
- Make a reservation for a space resort on Mars the third weekend in December for 2 astronauts
- Do I have an upcoming space trip?
- Cancel my space trip

We train these to the goal `Order#commitOrder` where `commitOrder` is a named-consumer on the `Order` with two flagged signal routes: `CreateItem` and `CreateOrder`. 
We annotate as Values any present inputs for either "find" or "book", such as resort name, planet, search criteria, number of astronauts, etc. 
This is to create a plan where we first find a space resort that matches the search inputs, and then prepare an `Order` and pass it to the `CommitOrder` Action which will present the user with a Confirmation screen to review and agree to the reservation.

#### Inner Queries (Continuations of SpaceResort)
You can see all trained utterances and plans by entering this query in the training tab search bar: `goal:Order#commitOrder continuation:SpaceResort`. For example:
- Make reservation
- Book a pod for 2 astronauts

We train these just like the outer "book" queries, with the addition of a "Continuation of" `SpaceResort`. 
This is to cover cases where the users are already browsing space resorts and want to initiate a booking for one of the results in context.

#### Inner Queries (Continuations to change the order)
You can see all trained utterances and plans by entering this query in the training tab search bar: `goal:Order#commitOrder continuation:Order#commitOrder`. For example:
- Pick a different habitat pod
- Change that to 2 astronauts
- Select a different date

We train these as "Continuation of" `Order#commitOrder` for cases where the users are at the Confirmation screen to review their order and decide that they want to make some changes. 
The goal remains `Order#commitOrder` and any Values are annotated as such (ex: number of astronauts, pod name). 
This time, the flagged signal route is to `ChangeOrder`. 
This is to re-route the request to update the Order with the newly provided information. 
For generic requests that do not contain a new input Value (ex: Change the number of astronauts), then we add an extra flagged signal route to the Action for that request (ex: GetNumberOfAstronauts). 

### Prompt Flows

#### Confirmation Prompt
You can see all trained utterances and plans by entering this query in the training tab search bar: `goal:Confirmation`. For example:
- Yes
- Do it

When the user is done revieweing their Order at the Confirmation Prompt, they can use these utterances to move forward and proceed with the reservation. This is an "At prompt for" `Confirmation` with goal `Confirmation`. 
The Confirmation itself is annotated with a boolean Value "true" or "false".

#### SpaceResort Selection Prompt
You can see all trained utterances and plans by entering this query in the training tab search bar: `goal:Confirmation`. For example:
- The one with a refueling station
- The Mercurial
- The one on Venus

For prompt training, the goal must always match the prompt context, so we train these as "At prompt for" `SpaceResort` with goal `SpaceResort`.
The booking flow only allows a single SpaceResort at a time, so when there are multiple candidates the user will be presented with a Selection Prompt.
Here they can answer in many ways, so we annotate any provided Value (space resort name, planet, search criteria) and add a flagged signal route to the `SelectResort` Action. 
This Action will take the hotels currently in context and attempt to filter them based on the newly provided inputs. 
For example:
- User: Book a hotel near Jupiter
- Bixby: Here are some hotels around Jupiter. Which one would you like?
- User: The one with a refueling station.
- Bixby: There are 3 hotels around Jupiter with a refueling station. Which one? (Where the 3 options are a subset of the previous options, not a new search)
- User: The Ganymede Moon Motel

#### Other Selection Prompts (NumberOfAstronauts, HabitatPod, DateInterval...)
You can see all trained utterances and plans by entering this query in the training tab search bar: ` has:prompt -goal:SpaceResort -goal:Confirmation`. For example:
- 3 astronauts
- The Honey Moon Suite
- Next weekend

For prompt training, the goal must always match the prompt context, so we train these as "At prompt for" `<Concept>` and goal `<Concept>`. 
Then we annotate the Value in the utterance for that `<Concept>`.

## Changelog

### 1.0.0
- Book space resorts

### 0.1.0
- Find space resorts