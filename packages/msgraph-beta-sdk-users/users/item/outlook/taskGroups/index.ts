/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createOutlookTaskGroupCollectionResponseFromDiscriminatorValue, createOutlookTaskGroupFromDiscriminatorValue, serializeOutlookTaskGroup, type OutlookTaskGroup, type OutlookTaskGroupCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { OutlookTaskGroupItemRequestBuilderNavigationMetadata, OutlookTaskGroupItemRequestBuilderRequestsMetadata, OutlookTaskGroupItemRequestBuilderUriTemplate, type OutlookTaskGroupItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the taskGroups property of the microsoft.graph.outlookUser entity.
 */
export interface TaskGroupsRequestBuilder extends BaseRequestBuilder<TaskGroupsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated The Outlook tasks API is deprecated and will stop returning data on February 20, 2023. Please use the new To Do API. For more details, please visit https://developer.microsoft.com/en-us/office/blogs/announcing-the-general-availability-of-microsoft-to-do-apis-on-graph/ as of 2020-08/Outlook_Tasks
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the taskGroups property of the microsoft.graph.outlookUser entity.
     * @param outlookTaskGroupId The unique identifier of outlookTaskGroup
     * @returns a OutlookTaskGroupItemRequestBuilder
     * @deprecated The Outlook tasks API is deprecated and will stop returning data on February 20, 2023. Please use the new To Do API. For more details, please visit https://developer.microsoft.com/en-us/office/blogs/announcing-the-general-availability-of-microsoft-to-do-apis-on-graph/ as of 2020-08/Outlook_Tasks
     */
     byOutlookTaskGroupId(outlookTaskGroupId: string) : OutlookTaskGroupItemRequestBuilder;
    /**
     * Get all the Outlook task groups in the user's mailbox. The response always includes the default task group My Tasks, and any other task groups that have been created in the mailbox.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OutlookTaskGroupCollectionResponse
     * @deprecated The Outlook tasks API is deprecated and will stop returning data on February 20, 2023. Please use the new To Do API. For more details, please visit https://developer.microsoft.com/en-us/office/blogs/announcing-the-general-availability-of-microsoft-to-do-apis-on-graph/ as of 2020-08/Outlook_Tasks
     * @see {@link https://learn.microsoft.com/graph/api/outlookuser-list-taskgroups?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TaskGroupsRequestBuilderGetQueryParameters> | undefined) : Promise<OutlookTaskGroupCollectionResponse | undefined>;
    /**
     * Create an Outlook task group in the user's mailbox.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OutlookTaskGroup
     * @deprecated The Outlook tasks API is deprecated and will stop returning data on February 20, 2023. Please use the new To Do API. For more details, please visit https://developer.microsoft.com/en-us/office/blogs/announcing-the-general-availability-of-microsoft-to-do-apis-on-graph/ as of 2020-08/Outlook_Tasks
     * @see {@link https://learn.microsoft.com/graph/api/outlookuser-post-taskgroups?view=graph-rest-1.0|Find more info here}
     */
     post(body: OutlookTaskGroup, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OutlookTaskGroup | undefined>;
    /**
     * Get all the Outlook task groups in the user's mailbox. The response always includes the default task group My Tasks, and any other task groups that have been created in the mailbox.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The Outlook tasks API is deprecated and will stop returning data on February 20, 2023. Please use the new To Do API. For more details, please visit https://developer.microsoft.com/en-us/office/blogs/announcing-the-general-availability-of-microsoft-to-do-apis-on-graph/ as of 2020-08/Outlook_Tasks
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TaskGroupsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create an Outlook task group in the user's mailbox.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The Outlook tasks API is deprecated and will stop returning data on February 20, 2023. Please use the new To Do API. For more details, please visit https://developer.microsoft.com/en-us/office/blogs/announcing-the-general-availability-of-microsoft-to-do-apis-on-graph/ as of 2020-08/Outlook_Tasks
     */
     toPostRequestInformation(body: OutlookTaskGroup, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get all the Outlook task groups in the user's mailbox. The response always includes the default task group My Tasks, and any other task groups that have been created in the mailbox.
 */
export interface TaskGroupsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TaskGroupsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TaskGroupsRequestBuilderNavigationMetadata: Record<Exclude<keyof TaskGroupsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byOutlookTaskGroupId: {
        uriTemplate: OutlookTaskGroupItemRequestBuilderUriTemplate,
        requestsMetadata: OutlookTaskGroupItemRequestBuilderRequestsMetadata,
        navigationMetadata: OutlookTaskGroupItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["outlookTaskGroup%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TaskGroupsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createOutlookTaskGroupCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: TaskGroupsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createOutlookTaskGroupFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOutlookTaskGroup,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TaskGroupsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/outlook/taskGroups{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}";
/* tslint:enable */
/* eslint-enable */