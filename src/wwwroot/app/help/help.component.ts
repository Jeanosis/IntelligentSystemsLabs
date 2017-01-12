import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.css']
})
export class HelpComponent extends OnInit {

    constructor() {
        super();
    }

    ngOnInit(): void {
        
    }


    @Input() articleText: string = `
        <h2>Fuzzy-logic inference theory</h2>

        <p>The current document is intended to describe the theoretical basis behind CoreLogic library.</p>

        <p>The library is solely dedicated to solving fuzzy-logic inference problems.
        Fuzzy-logic inference is a process of calculating the values of some output variables
        from the known values of some input variables, based on the set of fuzzy-logic rules,
        that describe the output variables' dependency on the input variables.</p>

        <h3>Problem description</h3>

        <p>Each fuzzy-logic inference problem is characterized by:</p>

        <ul>
        <li>a set of input variables, divided in fuzzy-classes;</li>
        <li>a set of output variables, divided in fuzzy-classes;</li>
        <li>a set of rules, stated in terms of the variables' classes.</li>
        </ul>

        <h4>Variables</h4>

        <p>Each variable - input or output - has its domain range [a,b]. The range can
        theoretically be infinite (i.e. not bounded), but, due to the membership function types
        (see below) used in CoreLogic library, it will not be useful. Each variable's
        domain range is partitioned by a set of fuzzy-classes. This set is called the variable's
        fuzzy-class partition.</p>

        <h4>Fuzzy-classes</h4>

        <p>A fuzzy-class of some variable is, essentially, described with its membership function.
        A membership function of a class maps all the possible values of the variable
        (i.e. values from [a,b] segment) to [0,1] segment, thus providing a measure for
        "how much" each possible value of the variable belongs to the class.</p>

        <p>The membership functions can take lots of different forms,
        but the ones implemented in the library are:</p>

        <ul>
        <li>triangular;</li>
        <li>trapezoidal;</li>
        <li>Gaussian;</li>
        <li>generalised Bell;</li>
        <li>sigmoid difference.</li>
        </ul>

        <p>You can read about those in more detail and find some exaples
        of membership functions' graphs here:
        <a href="http://www-rohan.sdsu.edu/doc/matlab/toolbox/fuzzy/fuzzytu3.html">http://www-rohan.sdsu.edu/doc/matlab/toolbox/fuzzy/fuzzytu3.html</a></p>

        <h4>Inference rules</h4>

        <p>The fuzzy-class partitions are useful, because now the inference system can be stated
        simply as a set of rules, each rule being of form "an output variable's value lies in
        class X if an input variable's value lies in class Y". This statement will simply mean
        that the output variable's membership value for class X is equal to the input variabble's
        membership value's for class Y.</p>

        <p>So <code>(v1 in C1) if (v2 in C2)</code> - value v1 is in class C1 if value v2 is in class C2 -
        simply means <code>C1(v1) = C2(v2)</code> - value v1 is in class C1 to the same degree as
        value v2 is in class C2.</p>

        <p>To make things a little more flexible, the condition of a rule (the part afer 'if')
        can include statements about several input variables. These statemets can be
        connected via <em>and</em>, <em>or</em> and <em>not</em> operations. These operations result in
        finding <em>min</em> or <em>max</em> between two values, or finding a <em>1-complement</em> (<code>1 - x</code>)
        to one value respectively.</p>

        <p>For example:</p>

        <ul>
        <li><code>(v1 in C1) if (v2 not in C2)</code> means <code>C1(v1) = 1 - C2(v2)</code></li>
        <li><code>(v1 in C1) if (v2 in C2) and (v3 in C3)</code> means <code>C1(v1) = min(C2(v2), C3(v3))</code></li>
        <li><code>(v1 in C1) if (v2 in C2) or (v3 in C3)</code> means <code>C1(v1) = max(C2(v2), C3(v3))</code></li>
        </ul>

        <p>Of course, the operations can be nested:</p>

        <p><code>(v1 in C1) if ((v2 is not in C2) and ((v2 is in C3) or (v3 is not in C4)))</code></p>

        <p>means</p>

        <p><code>C1(v1) = min(1 - C2(v2), max(C3(v2), 1 - C4(v3)))</code>.</p>

        <h3>Fuzzy-logic inference process</h3>

        <p>Fuzzy-logic inference process consists of these three parts:</p>

        <ol>
        <li>Fuzzyfication (concrete values -&gt; fuzzy sets)</li>
        <li>Rules-based inference</li>
        <li>Defuzzyfication (fuzzy sets -&gt; concrete values)</li>
        </ol>

        <h4>Fuzzyfication</h4>

        <p>The rules, used for inference, are stated in terms of classes, but the input of the
        problem is simply a set of concrete values - one value for each input variable.
        To work with the rules on the next stage, we fuzzyfy the inputs: for each variable's
        concrete value we compute a set of membership values - one value for each class
        from the variable's partitioning.</p>

        <p>Suppose varible <code>V</code> is partitioned in classes <code>C1</code>, <code>C2</code> and <code>C3</code>.
        On fuzzyfication stage we, given a concrete <code>V</code>'s value <code>v</code>,
        compute <code>C1(v)</code>, <code>C2(v)</code> and <code>C3(v)</code>, where <code>Ci(x)</code> is the value of <code>Ci</code>'s
        membership function on <code>x</code>.</p>

        <h4>Rules-based inference</h4>

        <p>On this stage we acquire a membership value for each class of each output
        variable. This is done using inferance rules: each output variable's class has at
        least one inferance rule associated with it. A class having a few rules
        <code>R1</code>, <code>R2</code>, ... , <code>Rn</code> associated with it is the same as this class having only one rule,
        which states <code>R1 or R2 or ... or R3</code>. Thus, we can say that the output variables' classes
        and the (slightly modified) rules have one-to-one correspondence.</p>

        <p>In the end, to acquire a membership value for each class of each output variable,
        we simply compute each rule's conditions (see the examples in "Inference rules" part above),
        using the membership values of the input variables' classes (which were computed on the previous step).</p>

        <h4>Defuzzyfication</h4>

        <p>After the previous step, we have a membership value for each of the output variables' classes.
        For every output variable we can now build a value distribution: a function [a,b] -&gt; [0,1],
        that shows "to which degree" each possible value of the variable
        can be a solution of the problem.</p>

        <p>Let the membership values (calculated on the previous step) for an output variable <code>V</code>'s
        classes <code>C1</code>, <code>C2</code>, ... , <code>Cn</code> be <code>c1</code>, <code>c2</code>, ... , <code>cn</code>.
        Then <code>V</code>'s value distribution function is:</p>

        <pre><code>f(x) = max(min(c1, C1(x)), min(c2, C2(x)), ... , min(cn, Cn(x)))
        </code></pre>

        <p>Acquiring a concrete value from this distribution function is called deffuzyfication
        and is usually (and always for CoreLogic library) computed as the gravity center of <code>f</code>.
        A gravity ceneter of a function f on [a,b] is computed by division of two define integrals:</p>

        <pre><code>integral([a,b]; f(x)*x) / integral([a,b]; f(x))
        </code></pre>

        <p>Applying this formula to every value distribution function will produce
        a concrete value for each output variable, which is the problem's solution.</p>`;
}