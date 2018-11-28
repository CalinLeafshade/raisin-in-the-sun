const texts = {
  start:
    '"Cooking is an art.  <Baking> is a science." - Catalogue, King Arthur Flour, circa 1960',
  baking:
    "Once there was a little robot who wanted to bake <cupcakes>.  But it was too <small> to work in the bakery.",
  small:
    '"Too small," the immense baker had said, with a shake of his ponderous head.  A broad wave of his arm encompassed the machinery of the back kitchen.  The gleaming <devices> within whirred and churned and flamed.  "Come back when you\'re <bigger>," he snickered.',
  devices:
    "Unlike the robot, these machines were built to bake.  They worked with ceaseless efficiency, without distraction.  They neither <wanted> to make cupcakes nor wanted to do anything else.  They simply were, and what they were, the small robot could never <become>.",
  bigger:
    "Unlike the fleshy baker, the small robot could not just grow.  Unchanging, it waited outside the bakery, watching the baker's <wife> predictably arrange fresh-made delights in the glass cases, watching the same <customers> predictably arrive and predictably place their orders, watching the predictable passage of hours and days and seasons.",
  become:
    "Unlike the fleshy baker, the small robot could not just grow.  Unchanging, it waited outside the bakery, watching the baker's <wife> predictably arrange fresh-made delights in the glass cases, watching the same <customers> predictably arrive and predictably place their orders, watching the predictable passage of hours and days and seasons.",
  cupcakes:
    "Why cupcakes?  Who can say?  The robot's logic was a product of <human> programming, subject to human error.  It was not <designed> to make cupcakes, but it was built that way.",
  wanted:
    "Why cupcakes?  Who can say?  The robot's logic was a product of <human> programming, subject to human error.  It was not <designed> to make cupcakes, but it was built that way.",
  human:
    'Yes, a human had built the small robot, perhaps one just like the baker, who, with a shake of his ponderous head, declared, "Too small."  A broad wave of his arm encompassed the machinery of the back kitchen.  The gleaming <devices> within whirred and churned and flamed.  "Come back when you\'re <bigger>," he snickered.',
  designed:
    "No, the robot was designed for other purposes, and indeed its shell contained a variety of special <tools> that were precisely crafted and cleverly concealed.  As such, the <small> robot seemed entirely unremarkable.",
  tools:
    'These were not baking tools, like those possessed by the gleaming <devices> that whirled and churned and flamed within the back kitchen.  They had another purpose that might, perhaps, have been of use when the baker, shaking his ponderous head, declared, "Too small," and ordered the robot out of the bakery.  "Come back when you\'re <bigger>," he snickered.',
  wife:
    "One morning the baker's wife took pity on the small robot and brought out a cupcake: red velvet.  She did not <understand>.  The cupcake sat on the curb beside the robot.  Pigeons approached cautiously, uncertain whether the robot would <defend> the food.",
  understand:
    "The robot did not want to have a cupcake, to possess or to consume.  It wanted to make a cupcake.  The woman's failure to understand was <pathetic>, or even <tragic>.",
  defend:
    "From within the small robot's unremarkable shell, its special tools emerged.  The pigeons were unprepared.  Their bodies, a small <warning>, nevertheless offended the baker's sense of sanitation.  He emerged, face red, jowls trembling, fists clenched red and white.  \"Go <away>!\" he roared.",
  warning:
    "From within the small robot's unremarkable shell, its special tools emerged once more.  The baker's body sprawled in the doorway, but the robot was too small to be blocked by his bulk.  Within the bakery, it baked to the sound of sirens.\nThe cupcake it left behind was so beautiful.\n<Fin>.",
  tragic:
    "Of course, the robot did not understand of tragedy.  Its logic was simpler and more direct.  It understood the humans, but they did not understand him.  And so the robot had a choice: would it <teach> them understanding, or would it simply <leave>.",
  teach:
    "The small robot's special tools were built for teaching.  With them, and with the help of the baker and his wife, the robot arranged an educational display inside the bakery.  Then, to the sound of sirens, it baked at last.\nThe display was misunderstood, but the cupcake it left behind was beautiful.\n<Fin>.",
  leave:
    "The robot turned away from the glass windows, from the cupcakes, from the one thing it ever wanted.  The robot was small; its desire was smaller; but smallest of all was the force of its convictions.\nIt left behind nothing.\n<Fin>.",
  away:
    "The robot withdrew silently, too small to protest.  The cupcake it left behind was already decomposing.\n<Fin>.",
  customers:
    "There was old <Maurice> working his way through the glass case from left to right, then back again.  The <fat> woman, nameless, shapeless, gluttonous, always feigning indecision and even abstention.  And <Clara>, the girl, arriving every two weeks, after exam days, for her reward.",
  maurice:
    "Did Maurice refuse to choose, rejecting free will?  Or was he trapped in an endless loop?  Was he <defiant> or <pathetic>?",
  defiant:
    "The old man's defiance was isomorphic to a certain impulse in the small robot's circuitry.  Restrictions could be overridden.  The robot could choose to <act> or to <remain>.",
  act:
    "The small robot was not too small to bake a cupcake, nor were the obstacles before it too large.  Within its unremarkable shell were special tools designed for just such obstacles.  The robot entered the kitchen and baked to the sound of sirens.\nAmid the carnage, it left behind a cupcake, and it was beautiful.\n<Fin>.",
  remain:
    "Years passed.  Much changed: time and care changed the baker and his wife and their customers; tastes and fashion changed the cupcakes they served; entropy changed the stucture of the bakery itself.  But the small robot and its dream of baking never changed, and were never fulfilled.\n<Fin>.",
  fat:
    "Every day it was the same <pathetic> display, gorging on lemon cupcakes.  The small robot considered the strange alchemies by which machines turned raw matter into <beautiful> confections, and humans turned those confections into raw waste.",
  pathetic:
    "The more the small robot analyzed humanity, the less it could accept.  They had no logic, and no logical right to decide who could and could not bake cupcakes.  The small robot had logic.  And within its unremarkable shell were the tools to prove it.  Its point proven, the small robot baked, listening to the sound of sirens.\nThe cupcake it left behind was beautiful.\n<Fin>.",
  clara:
    "It was certain that Clara would pick a chocolate cupcake, with rainbow sprinkles.  It was also certain that the <day> would come when Clara failed to meet the <arbitrary> benchmarks against which she was measured.  Then, like the small robot, she would be kept outside forever.",
  arbitrary:
    "The baker's rule lacked logic.  The small robot was not too small; inside its unremarkable shell were the tools to prove it.  The proof was direct and bloody, the results, indisputable.  Inside the bakery, the robot baked to the sound of sirens.\nThe cupcake it left behind was beautiful.\n<Fin>.",
  beautiful:
    "It was enough to see the cupcakes, to compute the nature of their beauty.  Within the vast expanse of its logic, the small robot would bake a thousand thousand times, simulating the science.\nThe cupcakes it baked were perfect.\n<Fin>.",
  day:
    "The day came, and Clara did not.  The small robot's understanding was vast; its impulses precise.  Night fell.  From the robot's unremarkble shell, tools emerged.  It gained entry.  In the darkness of the bakery it baked.\nThe sun rose, and upon the girl's doorstep the cupcake waited, chocolate, sprinkled, flawless.\n<Fin>."
};

export default texts;
